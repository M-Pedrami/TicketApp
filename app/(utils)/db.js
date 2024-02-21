import mongoose from "mongoose";
const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGOOSE_URI);
    console.log(
      "Connected to Database" + "/Collection:" + connect.connection.name
    );
  } catch (error) {
    console.log("ERROR connection to Database");
  }
};

export default connectDB