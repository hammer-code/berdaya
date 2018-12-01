import {Schema, model} from 'mongoose';

const Event = Schema({
  name: {type: String, required: true},
  date: {type: Date, required: true},
  venue: {type: String, required: true},
  coordinate: {type: String, required: true},
  createdAt: {type: Date, default: Date.now},
  updatedAt: {type: Date, default: Date.now},
});

export default model('Event', Event);
