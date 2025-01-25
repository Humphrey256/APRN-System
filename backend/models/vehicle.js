const mongoose = require('mongoose');

const offenseSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const vehicleSchema = new mongoose.Schema({
  plateNumber: {
    type: String,
    required: true,
    unique: true,
  },
  owner: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  offenses: [offenseSchema],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Vehicle', vehicleSchema);