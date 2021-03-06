import express from 'express';
import mysql from 'mysql';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config';

import morgan from 'morgan';
import bodyParser from 'body-parser';


const app = express();

const connection = mysql.createConnection({
    host: 'localhost',
    user : 'root',
    password : 'root',
    database : 'examen'
});



let clientModel = {};

clientModel.getUsers = (callback) => {
    if (connection){
        connection.query('SELECT * FROM usuarios ORDER BY id',
        (err,rows) => {
            if (err){
                throw err;
            }
            else{
                callback(null, rows);
            }
        }
    )
    }
};

app.get('/api/cliente', (req,res) => {
    clientModel.getUsers((err,data)=>{
        res.status(200).json(data);
    });
});

let compra68 ={};

compra68.getUsers = (callback) => {
    if (connection){
        connection.query('SELECT * FROM compras WHERE idusuario=68',
        (err,rows) => {
            if (err){
                throw err;
            }
            else{
                callback(null, rows);
            }
        }
    )
    }
};

app.get('/api/cliente/68', (req,res) => {
    compra68.getUsers((err,data)=>{
        res.status(200).json(data);
    });
});

let compra69 ={};

compra69.getUsers = (callback) => {
    if (connection){
        connection.query('SELECT * FROM compras WHERE idusuario=69',
        (err,rows) => {
            if (err){
                throw err;
            }
            else{
                callback(null, rows);
            }
        }
    )
    }
};

app.get('/api/cliente/69', (req,res) => {
    compra69.getUsers((err,data)=>{
        res.status(200).json(data);
    });
});

let compra70 ={};

compra70.getUsers = (callback) => {
    if (connection){
        connection.query('SELECT * FROM compras WHERE idusuario=70',
        (err,rows) => {
            if (err){
                throw err;
            }
            else{
                callback(null, rows);
            }
        }
    )
    }
};

app.get('/api/cliente/70', (req,res) => {
    compra70.getUsers((err,data)=>{
        res.status(200).json(data);
    });
});




app.set('port',process.env.PORT || 3000);

app.use(webpackDevMiddleware(webpack(webpackConfig)));
app.use(morgan('dev'));
app.use(bodyParser.json());

app.get('/', (req,res) => {
    res.send('Hola');
});

app.get('/api', (req,res) => {
    res.json({api: 'Works!'});
});

app.listen(app.get('port'),() => {
    console.log('Server en puerto', app.get('port'));
});