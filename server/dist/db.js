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
exports.UserModel = exports.connectDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_2 = require("mongoose");
dotenv_1.default.config();
const MONGO_URI = process.env.MONGO_URI;
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!MONGO_URI) {
            throw new Error("MONGO_URI is not defined in .env file");
        }
        yield mongoose_1.default.connect(MONGO_URI);
        console.log("Connected to MongoDB");
    }
    catch (error) {
        console.error("Database did not connect", error);
        process.exit(1);
    }
});
exports.connectDB = connectDB;
const UserSchema = new mongoose_2.Schema({
    username: { type: String, unique: true },
    password: String,
});
exports.UserModel = (0, mongoose_2.model)("User", UserSchema);
