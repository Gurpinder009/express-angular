const express = require('express');
const port = 5000;
// const host = "192.168.2.109"
const app = express();
const route = require('./routes.js');
const cors = require('cors');



const allowedOrigins = ['http://192.168.2.109:4200'];
const options = {
        origin: allowedOrigins
}
app.use(cors(options));
    
    
app.use(express.json());
app.use('/userInfo', route);


app.listen(port, () => {
    console.log(`Server started @http://192.168.2.109:${port}`);
});






















