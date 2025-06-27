const mongoose = require('mongoose');

const designSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    imageURL: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        enum: ["streetWear", "coutre", "Formal", "Ehtnic", "Experimetal"],
        required: true // true
    },
    materialInfo: {
        type: String
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // 🔗 refers to the User model
        required: true
    }
}, { timestamps: true });

// Export as a Mongoose model for use in routes
module.exports = mongoose.model('Design', designSchema);
