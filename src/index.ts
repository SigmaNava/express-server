import express from 'express';
import mysql from 'mysql';
import { type } from 'os';

const app =express();
const port = 4000;

type IMessage = {

    message: string;
}

const message: IMessage = {

    message: 'HOla MUndo'

}

enum IEstado {

    PENDIENTE = 'PENDIENTE',
    CANCELADO = 'CANCELADO',
    TERMINADO = 'TERMINADO'
};


type Itodo = {

    id:number,
    titulos: string,
    descripcion: string,
    estado: IEstado

}

type IResponse = {

    data: {

        todos: Itodo[]

        
    }

}

// Crear conexion a MYSQL
const configMysql: mysql.ConnectionConfig = {
    host: 'localhost',
    user: 'root',
    password:'',
    database: ''

};

//Configurar para conexion mysql
const mysqlConection = mysql.createConnection(configMysql);


app.get('/hello_world', (req:express.Request, res:express.Response)=> {

 const name : string = 'yael';
 type Saludo = {

    message: string

 }
 const saludo : Saludo = {

    message: `Hola MUndo, soy ${name}`
 }

 res.json(saludo);

}); 

//RUta que utilizara la conexion para hacer querys
app.get('/suma',(req:express.Request, res:express.Response)=>{
 //callback (llamame de vuelta) es un return mamadisimo 
    mysqlConection.query('SELECT 1+1 As solution', (error,result, fields)=>{

        res.json({
            error,
            result,
            fields
        });

    });
});

app.listen(port, ()=>{

    console.log(`Ŝerver running on port ${port}`);

});