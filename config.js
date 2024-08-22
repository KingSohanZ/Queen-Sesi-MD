const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
ALIVE_IMG: process.env.ALIVE_IMG || "7Swh3IAI#EsTnz6HywZmwx4GCR9K-zMSe9eB1p65uOyU3cPxEIls",
ALIVE_MSG: process.env.ALIVE_MSG || "Hello I am Queen Nishu And My Developer King Is ║Sohan Matheesha...😌💗⚒️",
};
