import mongoose from 'mongoose';

const mongoUrl = 'mongodb://127.0.0.1:27017/widgets-db';
mongoose.connect(mongoUrl);

export default mongoose;
