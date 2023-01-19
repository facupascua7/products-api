import mongoose, { Schema } from "mongoose";
import bcrypt from 'bcryptjs';

const userSchema = mongoose.Schema({
  username: {
    type: String,
    unique: true
  },
  email: {
    type: String,
    unique: true
  },
  password: {
    type: String,
    unique: true
  },
  roles: [{
    ref: "Role",
    type: Schema.Types.ObjectId
  }] // a user can have multiple roles 
}, {
  timestamps: true,
  versionKey: false
});

userSchema.statics.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

userSchema.statics.comparePassword = async (password, recievedPassword) => {
  return await bcrypt.compare(password, recievedPassword);
};

module.exports = mongoose.model('User', userSchema);