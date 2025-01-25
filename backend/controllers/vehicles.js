const Vehicle = require('../models/vehicle');

// Add a new vehicle
exports.addVehicle = async (req, res) => {
  const { plateNumber, owner, model } = req.body;

  try {
    let vehicle = new Vehicle({ plateNumber, owner, model });
    await vehicle.save();

    res.status(201).json({ message: 'Vehicle added successfully', vehicle });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Update vehicle details
exports.updateVehicle = async (req, res) => {
  const { plateNumber, owner, model } = req.body;

  try {
    let vehicle = await Vehicle.findOne({ plateNumber });

    if (!vehicle) {
      return res.status(404).json({ message: 'Vehicle not found' });
    }

    vehicle.owner = owner || vehicle.owner;
    vehicle.model = model || vehicle.model;
    await vehicle.save();

    res.status(200).json({ message: 'Vehicle updated successfully', vehicle });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Delete a vehicle
exports.deleteVehicle = async (req, res) => {
  const { plateNumber } = req.body;

  try {
    let vehicle = await Vehicle.findOneAndDelete({ plateNumber });

    if (!vehicle) {
      return res.status(404).json({ message: 'Vehicle not found' });
    }

    res.status(200).json({ message: 'Vehicle deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};