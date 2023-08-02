const Reservation = require("../models/reservation.model");
const Car = require("../models/car.model");

exports.createReservation = async (req) => {
  try {
    let { userId, carId, startDate, endDate } = req.body;
    startDate = new Date(startDate);
    endDate = new Date(endDate);
    const car = await Car.findById(carId);
    if (!car) {
      return { error: "Araç bulunamadı." };
    }
    // Daha önce başka bir kullanıcı tarafından rezerve edilmiş mi kontrolü
    if (car.isReserved) {
      return { error: "Araç zaten rezerve edilmiş." };
    }
    // Şu anki tarihi alınan alan
    const currentDate = new Date();
    // startDate ve endDate'in geçerli bir tarih aralığında olduğunu kontrol ediyorum
    if (startDate < currentDate || endDate <= startDate) {
      return { error: "Geçersiz rezervasyon tarihleri." };
    }
    // Rezervasyonu oluşturuyorum
    const reservation = new Reservation({
      user: userId,
      car: carId,
      startDate: startDate,
      endDate: endDate,
      totalPrice: calculateTotalPrice(startDate, endDate, car.pricePerDay), // Toplam fiyatı hesaplıyorum (gün başına fiyat ile süreyi çarpabiliriz)
    });

    // Rezervasyonu veritabanına kayıt ediyorum
    await reservation.save();

    // Araç durumunu rezerve edilmiş olarak işaretliyorum
    car.isReserved = true;
    await car.save();

    return { success: "Araç başarıyla rezerve edildi." };
  } catch (error) {
    throw new Error(error);
  }
};

exports.cancelReservation = async (req) => {
  try {
    let { reservationId } = req.body;
    const reservation = await Reservation.findById(reservationId);
    if (!reservation) {
      return { error: "Rezervasyon bulunamadı." };
    }

    // Rezervasyonun iptal edileceği tarihi alıyorum
    const currentDate = new Date();

    // Rezervasyonun iptal edileceği tarih geçmişte mi kontrol ediyorum
    if (reservation.endDate < currentDate) {
      return { error: "Geçmiş bir rezervasyon iptal edilemez." };
    }

    // Rezervasyonu veritabanından siliyorum
    await reservation.deleteOne();

    // Araç durumunu rezerve edilebilir olarak güncelliyorum
    const car = await Car.findById(reservation.car);
    if (car) {
      car.isReserved = false;
      await car.save();
    }

    return { success: "Rezervasyon iptal edildi." };
  } catch (error) {
    throw new Error(error);
  }
};

function calculateTotalPrice(startDate, endDate, pricePerDay) {
  // Örnek olarak, gün başına fiyatı alın ve süreyi çarpıyorum
  const days = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
  return days * pricePerDay;
}
