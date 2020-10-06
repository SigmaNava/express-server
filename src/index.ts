import express from 'express';

const app =express();
const port = 4000;

app.get('/hello_world', (req, res)=> {

    res.json({

        message: 'Hola Mundo'

    });

}); 

app.listen(port, ()=>{

    console.log(`Ŝerver running on port ${port}`);

});