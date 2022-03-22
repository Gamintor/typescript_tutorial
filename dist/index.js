"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multiply_1 = __importDefault(require("./multiply"));
const a = 2;
const b = 6;
console.log(`${a} × ${b} = ${(0, multiply_1.default)(a, b)}`);
