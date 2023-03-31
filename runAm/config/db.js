const mongoose = require('mongoose');

const connectionDB = async () => {
    try {
        const db = await mongoose.connect('mongodb://127.0.0.1:27017/runAm');
        console.log(`connected... to runAm local db`);
    } catch (error) {
        console.log(`error connecting to local db: ${error.message}`);
        process.exit(1);
    }
}


module.exports = {
    connectionDB
}