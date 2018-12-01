import {Schema, model} from 'mongoose';

const AttendanceSchema = Schema({
  event: {type: Schema.Types.ObjectId, ref: 'Event'},
  member: {type: Schema.Types.ObjectId, ref: 'Member'},
  name: {type: String, required: true},
  email: {type: String, required: true},
  phone: {type: String, default: null},
  rating: {type: Number, default: null},
  feedback: {type: String, default: null},
  attendAt: {type: Date, default: Date.now},
  createdAt: {type: Date, default: Date.now},
  updatedAt: {type: Date, default: Date.now},
});

export default model('Attendance', AttendanceSchema);
