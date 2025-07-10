"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const uniforms_1 = require("uniforms");
const ValidatedQuickForm_1 = __importDefault(require("./ValidatedQuickForm"));
function Auto(parent) {
    class _ extends uniforms_1.AutoForm.Auto(parent) {
    }
    _.Auto = Auto;
    return _;
}
exports.default = Auto(ValidatedQuickForm_1.default);
