const mongoose = require("mongoose");

const DBConnection = async () => {
  try {
    const connect = await mongoose.connect(
      "mongodb+srv://admin1:Flipmone1@cluster0.cvhh9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    );

    console.log("Database Connected");
  } catch (error) {
    console.log("Database Conection Error");
  }
};

module.exports = DBConnection;
