"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = 4000;
app.get('/hello_world', (req, res) => {
    res.json({
        message: 'Hola Mundo'
    });
});
app.listen(port, () => {
    console.log(`Ŝerver running on port ${port}`);
});
//# sourceMappingURL=index.js.map