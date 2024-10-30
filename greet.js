const fs = require('fs');
const X = require('./config');

function startApp() {
    try {
        console.log(config.GREET);
    } catch (error) {
        console.error("Error reading configuration file:", error.message);
    }
}

startApp();
