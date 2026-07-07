const mongoose = require("mongoose");
const User = require("./src/users/user.model");
require("dotenv").config();

async function createAdmin() {
  try {
    await mongoose.connect(process.env.DB_URL);

    const admin = new User({
      username: "raja",
      password: "123456",
      role: "admin",
    });

    await admin.save();

    console.log("✅ Admin created successfully!");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

createAdmin();