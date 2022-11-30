import { Schema } from "mongoose";



export const HomeSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    bedrooms: { type: Number, required: true },
    bathrooms: { type: Number, required: true },
    price: { type: Number, required: true },
    imgUrl: { type: String, required: true },
    color: { type: String, required: true }
  }, { timestamps: true, toJSON: { virtuals: true } }
)