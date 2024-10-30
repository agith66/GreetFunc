const fs = require('fs');

function startApp() {
    const config = JSON.parse(fs.readFileSync('config.json', 'utf8'));
    console.log(config.greetingMessage);
}

startApp();
