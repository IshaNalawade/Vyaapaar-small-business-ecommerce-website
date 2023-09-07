const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const validator = require("validator").default;
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    password: {
      type: String,
      trim: true,
      required: [true, "Please fill the password"],

    },
    email: {
      type: String,
      required: [true, "Please fill the email"],
      unique: [true, "Already have a account"],
      lowercase: true,
      trim: true,

    },
    address : {
      type : String,
      required : [true,'Please fill address']
    },
    what : {
      type : String
    }
    // avatar: {
    //   type: String,
    //   required: [true, "Please fill the avatar"],
    //   default: "https://i.imgur.com/X2Jx5VH.png",
    //   validate: [validator.isURL, "Invalid avatar"],
    // },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.post("save", (doc, next) => {
  console.log(doc);
  next();
});
function getToken(id) {
  return jwt.sign({ id }, require("../config/config").SECRET_KEY, {
    expiresIn: 3 * 24 * 3600,
  });
}
userSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });
  if (user) {
    if (await bcrypt.compare(password, user.password)) {
      return getToken(user._id);
    }
  }
  return null;
};

const User = mongoose.model("User", userSchema);
module.exports = User;