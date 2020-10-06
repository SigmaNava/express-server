import express from 'express';

const app =express();
const port = 4000;

type IMessage = {

    message: string;
}

const message: IMessage = {

    message: 'HOla MUndo'

}

app.get('/hello_world', (req, res)=> {

    res.json({

        message

    });

}); 

app.listen(port, ()=>{

    console.log(`Ŝerver running on port ${port}`);

});