import mongoose from 'mongoose';

const TimeSchema = new mongoose.Schema({
  Time: { type: String, required: true }
});

export default mongoose.model('Time', TimeSchema);

 