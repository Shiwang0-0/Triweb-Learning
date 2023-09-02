const mysql= require('mysql2');
// const { Connection } = require('mysql2/typings/mysql/lib/Connection');

//pool means it creates a part for model and database to connect.   
//JS is asynchronous means JS doest take hold that whether task is completed or not it just moves to the next line,
//but here it takes responsibity of telling that whether the process failed or not.

const pool = mysql.createPool({
    host:'127.0.0.1',
    database:'triweb',
    user:'root',
    port:3306,
    password:''
});

//createpool is a function in mysql which returns a promise.
module.exports = pool.promise();