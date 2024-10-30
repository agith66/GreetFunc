const fs = require('fs');
const path = require('path');

function logMessage(message) {
    const logFilePath = path.join(__dirname, 'log.txt');
    const timestamp = new Date().toISOString();
    fs.appendFileSync(logFilePath, `[${timestamp}] ${message}\n`);
}

function startApp() {
    let name = process.argv[2] || "Collaborator";
    let customMessage = process.argv[3];

    try {
        const config = JSON.parse(fs.readFileSync('config.json', 'utf8'));
        const greetingMessage = customMessage || config.greetingMessage;
        const message = `${greetingMessage}, ${name}!`;
        console.log(message);
        logMessage(message);
    } catch (error) {
        console.error("Error reading configuration file:", error.message);
    }
}

startApp();
