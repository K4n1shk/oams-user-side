const mongoose = require("mongoose");
const Joi = require("joi");

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  contact: { type: Number, required: true },
  category: { type: String, required: true },
  fatherName: { type: String, required: true },
  motherName: { type: String, required: true },
  fatherOcc: { type: String, required: true },
  motherOcc: { type: String, required: true },
  totalIncome: { type: Number, required: true },
  parentContact: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  isVerified: { type: Boolean, default: false },
  isDeclined: { type: Boolean, default: false },

})

const Info = mongoose.model("info", userSchema);

const validate = (data) => {
  const schema = Joi.object({
    firstName: Joi.string().required().label("First Name"),
    lastName: Joi.string().required().label("Last Name"),
    email: Joi.string().email().required().label("Email"),
    contact: Joi.number().required().label("Personal Contact"),
    category: Joi.string().required().label("Category"),
    fatherName: Joi.string().required().label("Father's Name"),
    motherName: Joi.string().required().label("Mother's Name"),
    fatherOcc: Joi.string().required().label("Father's Occupation"),
    motherOcc: Joi.string().required().label("Mother's Occupation"),
    totalIncome: Joi.number().required().label("Total Annual Income"),
    parentContact: Joi.number().required().label("Parent's Contact"),
  });
  return schema.validate(data);
}

module.exports = { Info, validate };