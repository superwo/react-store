import mongoose from 'mongoose';
//const connection = {};
const options = {
  useCreateIndex: true,
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
};
async function connectDb() {
  if (mongoose.connections && mongoose.connections[0]) {
    if (mongoose.connections[0].readyState) {
      console.log('Using existing connection');
      return;
    }
  }
  try {
    console.log('Making a connection with DB');
    await mongoose.connect(process.env.MONGO_SRV, options);
    console.log('DB Connected');
  } catch (error) {
    console.error(
      '************utils/connectDb.js showing this error: Error making a connection with the database!**********'
    );
    console.error(error);
  }
}
export default connectDb;

// import mongoose from 'mongoose';
// const connection = {};

// async function connectDb() {
//   if (connection.isConnected) {
//     // Use existing database connection
//     console.log('Using existing connection');
//     return;
//   }
//   // Use new database connection
//   const db = await mongoose.connect(process.env.MONGO_SRV, {
//     useCreateIndex: true,
//     useFindAndModify: false,
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   });
//   console.log('DB Connected');
//   connection.isConnected = db.connections[0].readyState;
// }

// export default connectDb;
