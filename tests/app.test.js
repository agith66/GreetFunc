const fs = require('fs');
const path = require('path');
const { startApp, logMessage } = require('../app'); // Modify this line as needed to export functions

test('logMessage function creates log entry', () => {
    const testMessage = "Test message";
    const logFilePath = path.join(__dirname, '../log.txt');

    // Clear log file before test
    if (fs.existsSync(logFilePath)) fs.unlinkSync(logFilePath);

    logMessage(testMessage);
    const logContent = fs.readFileSync(logFilePath, 'utf8');
    expect(logContent).toContain(testMessage);
});

test('startApp function logs message correctly', () => {
    // Test the startApp function for expected output
    // Additional test code here
});
