"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const uniforms_1 = require("uniforms");
const AutoField_1 = __importDefault(require("./AutoField"));
const BaseForm_1 = __importDefault(require("./BaseForm"));
const ErrorsField_1 = __importDefault(require("./ErrorsField"));
const SubmitField_1 = __importDefault(require("./SubmitField"));
function Quick(parent) {
    class _ extends uniforms_1.QuickForm.Quick(parent) {
        getAutoField() {
            return AutoField_1.default;
        }
        getErrorsField() {
            return ErrorsField_1.default;
        }
        getSubmitField() {
            return SubmitField_1.default;
        }
    }
    _.Quick = Quick;
    return _;
}
exports.default = Quick(BaseForm_1.default);
