import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connect = await mongoose.connect('mongodb+srv://Farhan1:sGISKp8NqDM4FFsy@cluster1.mlshwmq.mongodb.net/Intro?appName=Cluster1');
    console.log(`MongoDB Server Is Connected`);
  } catch (error) {
    console.log(`error: ${error}`);
    process.exit(1);
  }
};

export { connectDB };
