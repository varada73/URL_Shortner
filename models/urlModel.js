
import mongoose from "mongoose";
const urlSchema=mongoose.Schema({
    shortId: {
        type: String,
        required: true,
        unique: true
    },
    redirectURL: {
        type: String,
        required: true
    },
    visitHistory: [{timestamp: {type: Number}}],
   

},
{timestamp:true}
);
const Url= mongoose.model("url",urlSchema);
export default Url;