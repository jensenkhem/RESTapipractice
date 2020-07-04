
// Set up mongoose so we can create schema for a mongo db 
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema(
    {
        name: {
            type: String,
            required: "Please enter the name of the task!"
        },
        date_created: {
            type: Date,
            default: Date.now
        },
        status: {
            type: [{
                type: String,
                enum: ['pending', 'ongoing', 'completed']
            }],
            default: ['pending']
        }
    }
);

module.exports = mongoose.model('Tasks', TaskSchema);



