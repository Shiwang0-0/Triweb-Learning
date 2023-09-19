"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.getUser = exports.registerUser = void 0;
const user_1 = __importDefault(require("../models/user"));
const registerUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let resp;
    try {
        const user = new user_1.default(req.body); //retrieve the collection request body which user sends in a constant
        const result = yield user.save(); //save the retrived collection in mongo database
        // console.log(req.body);
        // console.log("registration done");
        if (!result) {
            resp = { status: "error", message: "No result found", data: {} }; //Error Saving the registration attempt
            res.send(resp);
        }
        else {
            resp = { status: "success", message: "registration done", data: { userId: result._id } };
            res.send(resp);
        }
    }
    catch (error) {
        console.log(error);
        resp = { status: "error", message: "something went wrong", data: {} }; //failed to register,some database error(or on sending duplicate data if validation is not proposed yet).
        res.status(500).send(resp);
    }
});
exports.registerUser = registerUser;
//localhost:3000/user/123?userId=456.
//where 123 is params and 456 is query.
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log("req body: ",req.body); 
    // console.log("query :" ,req.query);  
    // console.log("params : ",req.params.userId);
    let resp;
    try {
        const userId = req.params.userId; //userId retrieved from the URL
        const user = yield user_1.default.findById(userId);
        // const user =await User.findById(userId,{name:1,email:1});    to display only these content i.e displaying them forcefully.
        if (!user) {
            resp = { status: "error", message: "No user found of such details", data: {} }; //Error Saving the registration attempt
            res.send(resp);
        }
        else {
            resp = { status: "success", message: "user found", data: user };
            res.send(resp);
            console.log("done getting");
        }
    }
    catch (error) {
        console.log(error);
        resp = { status: "error", message: "something went wrong", data: {} };
        res.status(500).send(resp);
    }
});
exports.getUser = getUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let resp;
    try {
        const userId = req.body._id; //as in request's body we will be sending the id,retrieve it from there
        const user = yield user_1.default.findById(userId);
        if (!user) {
            console.log("User not found");
            resp = { status: "error", message: "cannot retrieve user", data: {} };
            res.status(401).send(resp);
        }
        else {
            user.name = req.body.name; //changed the User's name to name what we sent in thelatest request.
            yield user.save(); //save the latest changes made
            resp = { status: "success", message: "user updated", data: {} };
            res.send(resp);
            console.log("done updating");
        }
    }
    catch (error) {
        console.log(error);
        resp = { status: "error", message: "something went wrong", data: {} };
        res.status(500).send(resp);
    }
});
exports.updateUser = updateUser;
