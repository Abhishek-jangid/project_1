const mongoose = require("mongoose");
const db = mongoose.connection;

const URL = 'mongodb://10.10.1.173:27017,10.10.2.137:27017,10.10.1.57:27017/wm?compressors=zlib&gssapiServiceName=mongodb';
const OPTIONS = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};


var singletonDB = (function () {
    var connectedToDB = false;

    function connectToDB() {
        console.log('connecting to db');
        mongoose.connect(URL, OPTIONS)
            .catch((error) => console.log('Error', error))
        connectedToDB = true
    }

    db.on('error', () => { console.log('error in connecting') })
    db.on('open', () => { console.log('database connected') })
    const getInstance = () => {
        if (!connectedToDB) {
            connectToDB();
        }
    }

    return {connectToDB: getInstance};
})();

module.exports = singletonDB;