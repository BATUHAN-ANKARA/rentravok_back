const express = require("express")
const cors = require("cors");
const { default: helmet } = require("helmet");
const configs = require('./configs/index')
const db = require('./db/index')
const router = require("./router/index");
const consts = require('./consts/index')
const app = express();
const middlewares = require('./middlewares/index')
const utils = require('./utils/index')

const PORT = process.env.PORT || 6000;

configs.serverConfig.initialServerConfig()
utils.helpers.createUploadDir("./uploads");

app.use('/uploads', express.static('uploads'))

app.use(express.json())
app.use(helmet()) 
app.use(cors())

app.use(middlewares.loggerMiddleware)

// app.use(middlewares.authMiddleware)
//burdaki middleware daha sonra token yetkilendirme olduğunda kullanılacak

app.use(`${process.env.APP_PREFIX}${consts.router.AUTH}`, router.authRouter);
app.use(`${process.env.APP_PREFIX}${consts.router.USER}`, router.userRouter);
app.use(`${process.env.APP_PREFIX}${consts.router.CAR}`, router.carRouter);
app.use(`${process.env.APP_PREFIX}${consts.router.RESERVATION}`, router.reservationRouter);

// app.use(`${process.env.APP_PREFIX}${consts.router.GENERAL}`, router.generalRouter);
// app.use(`${process.env.APP_PREFIX}${consts.router.ZODIAC}`, router.zodiacRouter);
// app.use(`${process.env.APP_PREFIX}${consts.router.TAROT}`, router.tarotRouter);
// app.use(`${process.env.APP_PREFIX}${consts.router.COFFEE}`, router.coffeeRouter);
// app.use(`${process.env.APP_PREFIX}${consts.router.BLOG}`, router.blogRouter);
// app.use(`${process.env.APP_PREFIX}${consts.router.manager}`, router.managerRouter);

db.mongooseCoonection.connectToMongoDb().then(()=>{
    app.listen(PORT, () => {
      console.log(`Example app listening on port ${PORT}`);
    });
})
