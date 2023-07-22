const utils = require("../utils/index");
const upload = require("../middlewares/singleimageupload.middleware");
const uploadMultiple = require("../middlewares/multipleimageupload.middleware");
const multer = require("multer");

exports.uploadImage = async (req, res) => {
    return new Promise((resolve, reject) => {
        upload(req, res, async(err) => {
            if (err instanceof multer.MulterError) {
                reject(err)
            } else if (err) {
                reject(err)
            }
            const ip = await utils.helpers.getHost()
            const filePath = process.env.FILE_PATH
            const fileName = req.file.filename
            const fileString = `https://deneme${filePath}${fileName}`;
            resolve(fileString)
        })
    })
};

exports.uploadImageMultiple = async (req, res) => {
  return new Promise((resolve, reject) => {
    uploadMultiple(req, res, async (err) => {
      if (err instanceof multer.MulterError) {
        reject(err);
      } else if (err) {
        reject(err);
      }
      const filePath = process.env.FILE_PATH;
      const fileStrings = req.files.map((file) => {
        const fileName = file.filename;
        return `https://deneme${filePath}${fileName}`;
      });
      resolve(fileStrings);
    });
  });
};
