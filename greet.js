// app.js
const fs = require('fs');

function startApp() {
    try {
        const config = JSON.parse(fs.readFileSync('config.json', 'utf8'));
        console.log(config.greetingMessage);
    } catch (error) {
        console.error("Error reading configuration file:", error.message);
    }
}

startApp();
