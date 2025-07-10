"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const uniforms_1 = require("uniforms");
const BaseForm_1 = __importDefault(require("./BaseForm"));
function Validated(parent) {
    class _ extends uniforms_1.ValidatedForm.Validated(parent) {
    }
    _.Validated = Validated;
    return _;
}
exports.default = Validated(BaseForm_1.default);
