"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const user_1 = __importDefault(require("./routes/user"));
const app = (0, express_1.default)(); //intialize application
const connectionString = "mongodb+srv://bisht0shiwang:kjabc12345@cluster0.2hayggo.mongodb.net/workshopDb?retryWrites=true&w=majority"; //change the password and username to your account
app.use(express_1.default.json()); //parsing json data sent in the request
app.get('/', (req, res) => {
    res.send("hello connnected");
});
app.use('/user', user_1.default);
mongoose_1.default.connect(connectionString, {})
    .then(() => {
    app.listen(3000);
    console.log("connected to Server");
})
    .catch((error) => {
    console.log(error);
    console.log("failed");
});
