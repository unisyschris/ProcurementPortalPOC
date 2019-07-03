var config = {
    production: {
        app_name: 'Unisys Security System (Dev)',
        api_url: 'http://dbscpsapp05.reg4.com:8080/',
        refresh_interval: 5000,
        env:"(Dev)",
        public_address:''
    },
    dev: {
        app_name: 'Unisys Security System (Dev)',
        api_url: 'http://dbs2019db.reg4.com:1000/',
        refresh_interval: 5000,
        env:"(Dev)",
        public_address:''
    }
  }

exports.get = function get(env) {
    
    // if (env === 'production') {
        // return config.production;
    // } else {
        return config.dev;
    // }
    // return config.production;
}