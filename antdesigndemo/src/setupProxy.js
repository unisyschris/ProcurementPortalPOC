

const proxy = require('http-proxy-middleware');
const config = require('./config.js').get(process.env.REACT_APP_STAGE);
module.exports = function(app) {
    app.use(
        proxy('/securityapi', { 
            // SITEnv
            // target: 'http://dbscpsapp05.reg4.com:8080/' 
            // 153 Env
            // target: 'http://dbs2019db.reg4.com:1000/' 
            target:config.api_url
        })
       
    );
};