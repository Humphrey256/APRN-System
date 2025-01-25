// controllers/offenses.js
const Vehicle = require('../models/vehicle');

// Add offense to a vehicle
exports.addOffense = async (req, res) => {
  const { plateNumber, offense } = req.body;

  try {
    let vehicle = await Vehicle.findOne({ plateNumber });

    if (!vehicle) {
      return res.status(404).json({ message: 'Vehicle not found' });
    }

    vehicle.offenses.push(offense);
    await vehicle.save();

    res.status(200).json({ message: 'Offense added successfully', vehicle });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Get offenses for a vehicle
exports.getOffenses = async (req, res) => {
  const { plateNumber } = req.params;

  try {
    let vehicle = await Vehicle.findOne({ plateNumber });

    if (!vehicle) {
      return res.status(404).json({ message: 'Vehicle not found' });
    }

    res.status(200).json({ offenses: vehicle.offenses });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Delete an offense from a vehicle
exports.deleteOffense = async (req, res) => {
  const { plateNumber, offenseId } = req.body;

  try {
    let vehicle = await Vehicle.findOne({ plateNumber });

    if (!vehicle) {
      return res.status(404).json({ message: 'Vehicle not found' });
    }

    vehicle.offenses = vehicle.offenses.filter(offense => offense._id.toString() !== offenseId);
    await vehicle.save();

    res.status(200).json({ message: 'Offense deleted successfully', vehicle });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
