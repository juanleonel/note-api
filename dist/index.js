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
const express_1 = __importDefault(require("express"));
const mongoo_1 = __importDefault(require("./config/mongoo"));
const test_model_1 = __importDefault(require("./model/test.model"));
const portNumber = 8080;
const app = (0, express_1.default)();
(0, mongoo_1.default)().then(() => __awaiter(void 0, void 0, void 0, function* () {
    const test = new test_model_1.default({
        thing: 'do something'
    });
    yield test.save();
    console.log(test);
}));
app.get('/', (req, res) => {
    res.send('Hello word!!');
});
app.listen(portNumber, 'localhost', () => {
    console.log('Listen on localhost:' + portNumber);
});
//# sourceMappingURL=index.js.map