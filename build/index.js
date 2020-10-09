"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mysql_1 = __importDefault(require("mysql"));
const app = express_1.default();
const port = 4000;
const message = {
    message: 'HOla MUndo'
};
var IEstado;
(function (IEstado) {
    IEstado["PENDIENTE"] = "PENDIENTE";
    IEstado["CANCELADO"] = "CANCELADO";
    IEstado["TERMINADO"] = "TERMINADO";
})(IEstado || (IEstado = {}));
;
// Crear conexion a MYSQL
const configMysql = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: ''
};
//Configurar para conexion mysql
const mysqlConection = mysql_1.default.createConnection(configMysql);
app.get('/hello_world', (req, res) => {
    const name = 'yael';
    const saludo = {
        message: `Hola MUndo, soy ${name}`
    };
    res.json(saludo);
});
//RUta que utilizara la conexion para hacer querys
app.get('/suma', (req, res) => {
    //callback (llamame de vuelta) es un return mamadisimo 
    mysqlConection.query('SELECT 1+1 As solution', (error, result, fields) => {
        res.json({
            error,
            result,
            fields
        });
    });
});
app.listen(port, () => {
    console.log(`Ŝerver running on port ${port}`);
});
//# sourceMappingURL=index.js.map