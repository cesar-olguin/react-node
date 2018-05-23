import mysql from 'mysql';
connection = mysql.createConnection({
    host: 'localhost',
    user : 'root',
    password : 'root',
    database : 'examen'
});

let userModel = {};

userModel.getUsers = (callback) => {
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

