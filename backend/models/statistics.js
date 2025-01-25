const mongoose = require('mongoose');

const statisticsSchema = new mongoose.Schema({
  totalImagesProcessed: {
    type: Number,
    default: 0,
  },
  totalOffensesDetected: {
    type: Number,
    default: 0,
  },
  offenseTrends: {
    type: Map,
    of: Number,
  },
  detectionAccuracy: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Statistics', statisticsSchema);