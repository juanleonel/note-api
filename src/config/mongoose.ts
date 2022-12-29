import mongoose from "mongoose";

const DB_URL = process.env.DB_URL ?? 'mongodb://localhost:27017/notes'

const MongooseDB = async () => {
  mongoose.connect(DB_URL);
}

mongoose.connection.on('connected', () => {
  console.log('Mongoose connected to: ' + DB_URL);
})

mongoose.connection.on('error', () => {
  console.log('Mongoose connection error: ' + DB_URL);
})

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
})

process.once('SIGUSR2', () => {
  graceFullShutDown('nodemon restart', () => {
    process.kill(process.pid, 'SIGUSR2')
  });
})

process.once('SIGINT', () => {
  graceFullShutDown('app termination', () => {
    process.exit(0);
  });
})

const graceFullShutDown = (msg: string, callback: any) => {
  mongoose.connection.close(() => {
    console.log('Mongoose disconnected through ' + msg);
    callback();
  })
}

export default MongooseDB;
