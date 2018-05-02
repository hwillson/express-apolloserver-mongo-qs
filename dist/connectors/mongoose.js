"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoUrl = 'mongodb://127.0.0.1:27017/widgets-db';
mongoose_1.default.connect(mongoUrl);
exports.default = mongoose_1.default;
//# sourceMappingURL=mongoose.js.map