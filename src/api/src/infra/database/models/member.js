import {Schema, model} from 'mongoose';

const Member = Schema({
  name: {type: String, required: true},
  email: {type: String, required: true},
  phone: {type: String, default: null},
  createdAt: {type: Date, default: Date.now},
  updatedAt: {type: Date, default: Date.now},
});

export default model('Member', Member);
