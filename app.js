const express = require('express');
const mysql = require('mysql');
const app = express();

var allowCrossDomain = function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Cache-Control");

    if ('OPTIONS' == req.method) {
        res.send(200);
    }
    else {
        next();
    }
};

var con = null;

app.use(allowCrossDomain);

app.use((req, res, next) => {
    con = mysql.createConnection({
        host: "localhost",
        user: "root",
        database: "bisu"
    });

    con.connect(function (err) {
        if (err) throw err;
        console.log("Connected");
    })

    next();
})

app.get('/api/getCustomerInfo/:phoneNumber', (req, res) => {
    let response = null;
    console.log(req.params.phoneNumber)
    con.query(`SELECT * FROM subscription WHERE phoneNumber='${req.params.phoneNumber}'`, function (err, result, fields) {
        if (err) {
            response = {
                status: 500,
                message: "Sunucu hatası. Lütfen tekrar deneyin."
            }
        }

        if (response == null) {
            if (result.length === 0) {
                response = {
                    status: 404,
                    message: "Belirtilen telefona ait kayıt bulunamamıştır"
                }
            } else {
                response = {
                    status: 200,
                    message: result
                }
            }
        }


        if (con != null) {
            con.end((err) => {
                if (err) throw err;
                console.log("Connection Ended")
            })
        }

        res.status(response.status).send(response.message);

    });
})

app.get('/api/getSubscriptionOrders/:subscriptionId', (req, res) => {
    let response = null;
    con.query(`SELECT * FROM orders WHERE subscriptionId='${req.params.subscriptionId}'`, function (err, result, fields) {
        if (err) {
            response = {
                status: 500,
                message: "Sunucu hatası. Lütfen tekrar deneyin."
            }
        }
        
        if (response == null) {
            if (result.length === 0) {
                response = {
                    status: 404,
                    message: "Belirtilen abonelik numarasına ait kayıt bulunamamıştır"
                }
            } else {
                response = {
                    status: 200,
                    message: result
                }
            }
        }


        if (con != null) {
            con.end((err) => {
                if (err) throw err;
                console.log("Connection Ended")
            })
        }

        res.status(response.status).send(response.message);

    });
})

app.listen(5000, () => {
    console.log("Listening to port 5000")
})
