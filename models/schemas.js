const uuidv4 = require('uuid/v4');
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Will add the UUID type to the Mongoose Schema types
require('mongoose-uuid2')(mongoose);
const UUID = mongoose.Types.UUID;

const CategorySchema = new Schema({
  name: {
    type: String,
    required: [true, "name field is required"],
    unique: true // specifying `index: true` is optional if you do `unique: true`    
  },
  description: {
    type: String,
    required: [true, "description field is required"],
  }
});

const PhotographerSchema = new Schema({
  firstName: {
    type: String,
    required: [true, "firstName field is required"],
    index: true
  },
  lastName: {
    type: String,
    required: [true, "lastName field is required"],
    index: true
  },
  phone: {
    type: String,
    required: [true, "phone field is required"],
    index: false
  },
  email: {
    type: String,
    required: [true, "email field is required"],
    index: false
  }
});

const PhotoSchema = new Schema({
  _id: {
    type: UUID, default: uuidv4
  },
  name: {
    type: String,
    required: [true, "name field is required"],
    unique: true // specifying `index: true` is optional if you do `unique: true`    
  },
  price: {
    type: Number,
    required: [true, "price field is required"]
  },
  date: {
    type: Date,
    required: [true, "date field is required"]
  },
  key: {
    type: String,
    required: [false, "key field is not required"]
  },
  url: {
    type: String,
    required: [false, "url field is not required"]
  },
  category: { type: 'ObjectId', ref: 'Category' },
  photographer: { type: 'ObjectId', ref: 'Photographer' }
}, { _id: false });

// Model is collection of data
const Category = mongoose.model("Category", CategorySchema);
const Photographer = mongoose.model("Photographer", PhotographerSchema);
const Photo = mongoose.model("Photo", PhotoSchema);
module.exports = { Photo, Category, Photographer };
