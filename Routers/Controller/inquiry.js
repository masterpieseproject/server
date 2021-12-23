const inquiryModel = require("./../../db/Models/inquiry");
const userModel = require("./../../db/Models/user");
const roleModel = require("./../../db/Models/Role");

//
const addinquiry = (req, res) => {
  const { title, dec, user } = req.body;
      const newInquiry = new inquiryModel({
        title,
        dec,
        user,
      });
      newInquiry
        .save()
        .then((result) => {
          res.status(201).json(result);
        })
        .catch((error) => {
          res.status(400).json(error);
        });

};



module.exports = { addinquiry };
