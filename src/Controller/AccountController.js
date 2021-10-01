let AcImp = require("../Controller/AccountControllerImp");
let jwt = require('jsonwebtoken');

require('../../config/config-env');
const config = global.gConfig

exports.VerifyLogin = async function (req, res) {
    let result = ''
    req.param = req.body;
    let Token = jwt.sign({
        userId: "V001",
        username: req.user,
        role: "Special",
        TimeOut: ""
    },config.secretAlice);

    let _boolAuth = await AcImp.AuthLogon(req.param);
    try {
        if (_boolAuth) {
            result = {
                "IdentityAuth" : _boolAuth,
                "Token": Token
            }
        } else {
            result = {
                "IdentityAuth" : _boolAuth,
                "Token": ""
            }
        }
    } catch (ex) {
        result = ex
    }

    res.json(result);
}