import { timeStamp } from "console";
import mongoose from "../db/conn";
const { Schema } = mongoose

const Movie = mongoose.model("movie", new Schema({
    title: {type: String},
    rating: {type: Number},
    description: {type: String},
    director: {type: String},
    stars: {type: Array},
    poster: {type: String} 
}, {
    timestamps: true
}))

export default Movie