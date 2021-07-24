const mysql = require('mysql')
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'guri',
    password: 'Password&123',
    database:'expressJs'
})

connection.connect()


module.exports = connection