const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true
        },
        SSN: {
            type: String,
            required: true,
            min: [9, "GIVE US YOUR NUMBER"],
            max: [9, "Good employee"]
        },
        username: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
            min: [8, "Must be at least 8 characters"]
        },
        isEmployee: {
            type: Boolean
        }
    }
)