"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseForm_1 = __importDefault(require("./BaseForm"));
const QuickForm_1 = __importDefault(require("./QuickForm"));
const ValidatedForm_1 = __importDefault(require("./ValidatedForm"));
exports.default = ValidatedForm_1.default.Validated(QuickForm_1.default.Quick(BaseForm_1.default));
