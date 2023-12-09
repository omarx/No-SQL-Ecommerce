const { Schema, model } = require('mongoose');
const moment = require('moment');

const reactionSchema = new Schema({
    reactionBody: {
        type: String,
        required: true,
        maxLength: 280,
        minLength: 1
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => moment(timestamp).format('MMMM Do YYYY, h:mm:ss a')
    }
}, {
    toJSON: { getters: true },
    toObject: { getters: true }
});

const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        unique: true,
        maxLength: 280,
        minLength: 1
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => moment(timestamp).format('MMMM Do YYYY, h:mm:ss a')
    },
    reactions: [reactionSchema]
}, {
    toJSON: { getters: true },
    toObject: { getters: true }
});

thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const Thought = model('Thought', thoughtSchema);
const Reaction = model('Reaction', reactionSchema);

module.exports = Thought;
