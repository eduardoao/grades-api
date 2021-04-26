import mongoose from 'mongoose';

const db = {};
db.mongoose = mongoose;
db.url = "mongodb+srv://root:Regina52@cluster0.jpzpu.mongodb.net/grades?retryWrites=true&w=majority"; //process.env.MONGODB;

export { db };
