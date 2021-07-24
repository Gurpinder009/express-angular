const express = require('express')
const router = express.Router();
const connect = require('./db');



router.get('/', (req, res) => {

    connect.query('select * from userInfo', (error, results) => {
        if (!error) {
            console.log('Get operation completed');
            res.send(results);
        }
        else
            console.log('error :' + JSON.stringify(error, undefined, 2));
    })

});


router.post('/', (req, res) => {

    userName = req.body.userName;
    userEmail = req.body.userEmail;
    userPhone = req.body.userPhoneNumber;
    userPassword = req.body.userPassword;


    connect.query(`INSERT INTO userInfo(user_name,user_email,user_phone_number,user_password) values(?,?,?,?)`, [userName, userEmail, userPhone, userPassword], (error) => {
        if (!error) {
            console.log("post operation is completed")
        }
        else {
            console.log('error :' + JSON.stringify(error, undefined, 2));
        }
    });
    connect.commit;

})

module.exports = router;