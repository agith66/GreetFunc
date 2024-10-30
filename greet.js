const fs = require('fs');

function startApp() {
    let name = process.argv[2] || "Collaborator";
    let customMessage = process.argv[3];

    try {
        const config = JSON.parse(fs.readFileSync('config.json', 'utf8'));
        const greetingMessage = customMessage || config.greetingMessage;
        console.log(`${greetingMessage}, ${name}!`);
    } catch (error) {
        console.error("Error reading configuration file:", error.message);
    }
}

startApp();
