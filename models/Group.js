const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
  groupId: {
    type: String,
    required: true,
    unique: true
  },
  groupName: {
    type: String,
    required: true
  },
  destination: {
    latitude: Number,
    longitude: Number,
    address: String
  },
  members: [{
    username: String,
    joinedAt: Date
  }],
  meetingPoint: {
    latitude: Number,
    longitude: Number,
    address: String
  },
  createdBy: String,
  isActive: {
    type: Boolean,
    default: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Group', groupSchema);
