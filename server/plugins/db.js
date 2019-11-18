// const mongoose = require('mongoose');

// module.exports = mongoose.connect('mongodb://localhost/moba',{ useNewUrlParser: true });

module.exports = app => {
    
    const mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost/moba',{ useNewUrlParser: true });
    require('require-all')(__dirname + '/../models')
}