"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//includes schemas of collections
const mongoose_1 = __importDefault(require("mongoose"));
const schema = mongoose_1.default.Schema;
const userSchema = new schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        index: true //for fast searching(when needed to access the popular filed in the database)
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true //includes createdat,updatedat field in the collection
});
const User = mongoose_1.default.model("User", userSchema); //creates a collection on the basis of userSchema 
exports.default = User; //exports the schema created
