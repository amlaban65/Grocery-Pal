const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const validator = require("validator");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
});
UserSchema.statics.signup = async function(email, password) {
    if (!password) {
        throw Error("Please enter a password");
    }
    if (!email || !validator.isEmail(email)) {
        throw Error("Please enter a valid email");
    }
    if (!validator.isStrongPassword(password, {
        minLength: 8,
        minLowercase: 0,
        minUppercase: 0,
        minNumbers: 0,
        minSymbols: 0})) {
        throw Error("Password is not strong enough: Must contain at least 8 letters")
    }
    const exists = await this.findOne({email});
    if (exists) {
        throw Error("An account is already associated with that email");
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const user = this.create({email, password: hash});
    return user;
}
UserSchema.statics.login = async function(email, password) {
    if (!password) {
        throw Error("Please enter your password");
    }
    if (!email || !validator.isEmail(email)) {
        throw Error("Please enter a valid email");
    }
    const user = await this.findOne({email});
    if (!user) {
        throw Error("Incorrect email");
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
        throw Error("Incorrect password");
    }
    return user;
}
module.exports = mongoose.model("User", UserSchema);

