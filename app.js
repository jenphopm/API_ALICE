const express = require('express')
const app = express()
let bodyParser = require('body-parser');
let apiRoutes = require("./routes/api-routes");

require('./config/config-env.js');

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", req.headers.origin ? req.headers.origin : '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        return res.status(200).json({});
    }
    next();
});

// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({ extended: true, parameterLimit: 100, limit: '100mb' }));

app.use(bodyParser.json({ parameterLimit: 100, limit: '100mb' }));

app.use(bodyParser({ limit: '100mb'}));

app.use('/Service', apiRoutes);

app.use(express.static('cret'));

var server = app.listen(process.env.PORT || global.gConfig.node_port, function () {
    var port = server.address().port;
    console.log("App now running on env  : ", process.env.NODE_ENV);
    console.log("App now running on port : ", port);
});

module.exports = app;