"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const uniforms_1 = require("uniforms");
const AutoField_1 = __importDefault(require("./AutoField"));
function AutoFields(_a) {
    var { element = react_1.Fragment, fields, omitFields = [] } = _a, props = __rest(_a, ["element", "fields", "omitFields"]);
    const { schema } = (0, uniforms_1.useForm)();
    return (0, react_1.createElement)(element, props, (fields !== null && fields !== void 0 ? fields : schema.getSubfields())
        .filter(field => !omitFields.includes(field))
        .map(field => (0, react_1.createElement)(AutoField_1.default, { key: field, name: field })));
}
exports.default = AutoFields;
