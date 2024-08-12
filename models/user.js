const { Schema, model } = require("../database/connection");

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },

  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

// UserSchema.methods.comparePassword = function (password) {
//   return bcrypt.compareSync(password, this.hash_password);
// };

module.exports = model("User", UserSchema);
