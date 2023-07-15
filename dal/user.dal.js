const User = require("../models/user.model");

const UserDataAccess = {
  async create(userModel) {
    return await userModel.save();
  },
  async updateById(id, body) {
    return await User.findByIdAndUpdate({ _id: id }, body);
  },
  async findOne(where) {
    return await User.findOne(where);
  },
  async findById(id) {
    return await User.findById({ _id: id });
  },
  async findOnePopulate(where, populate) {
    return await User.findOne(where).populate(populate);
  }
};

module.exports = UserDataAccess;
