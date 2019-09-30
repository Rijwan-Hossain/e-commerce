const mongoose = require('mongoose');
const Schema = mongoose.Schema 

const common = { 
    type: String, 
    required: true, 
    trim: true, 
    unique: true 
} 

const UserSchema = new Schema({ 
    name: { ...common }, 
    email: { ...common }, 
    password: { ...common }, 
    mobile: String, 
    avatar: String, 
    address: String, 
    role: { 
        type: String, 
        default: 'User' 
    } 
}, 
{ 
    timeStamp: true 
}) 

const User = new mongoose.model('User', UserSchema); 
module.exports = User; 
