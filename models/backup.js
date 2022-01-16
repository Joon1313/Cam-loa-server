const mongoose = require('mongoose');

const { Schema } = mongoose;
const { Types: ObjectId } = Schema;
const backupSchema = new Schema({
    todo: {
        type: String,
        requried: true,
        },
    grave: {
        type: String,
        requried: true,
        },
    grave2: {
        type: String,
        requried: true,
        },
    grave3: {
        type: String,
        requried: true,
        },
    ip: {
        type: String,
        requried: true,
    },
    created: {
        type: Date,
        default: Date.now,
    }
})

module.exports = mongoose.model('Backup', backupSchema);
