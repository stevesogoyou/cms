const mysql = require('mysql2');

const connection = mysql.createConnection({
    host : process.env.HOST,
    password : process.env.PASSWORD,
    database :process.env.DATABASE_NAME ,
    user : "root",

})

connection.connect((err)=>
    {
    if (err)
    {
        console.error("Connection error",err);
    } else{
        console.log("Connection to the database");
    }
}
    )
module.exports = connection;