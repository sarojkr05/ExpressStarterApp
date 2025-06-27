const mongoose  = require('mongoose');
const bcrypt = require('bcrypt');
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        trim: true,
        maxLength: [14, "Max length should be 14 characters long"]
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
    }
}, {
    timestamps: true
});
// this is where the password is hashed
userSchema.pre('save', async function () {
    // here u can modify your user before it is ssaved in mongodb
    const hashedPassword = await bcrypt.hash(this.password, 10);
    this.password = hashedPassword;
});

const User = mongoose.model("User", userSchema);

module.exports = User;
