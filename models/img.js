const mongoose = require('mongoose');

const { Schema } = mongoose;
const { Types: ObjectId } = Schema;
const imgSchema = new Schema({
    name: {
        type: String,
        requried: true,
        },
    src: {
        type: String,
        requried: true,
        }
})
module.exports = mongoose.model('Img', imgSchema);
