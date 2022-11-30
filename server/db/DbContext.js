import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { CarSchema } from "../models/Car.js";
import { HomeSchema } from "../models/Home.js";
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Home = mongoose.model('Home', HomeSchema);
  Cars = mongoose.model('Car', CarSchema)
}

export const dbContext = new DbContext()
