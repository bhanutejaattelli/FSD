const os = require('os');

function formatUptime(uptimeInSeconds) {
    console.log(`${uptimeInSeconds}`)
    const days = Math.floor(uptimeInSeconds / (24 * 3600));
    const hours = Math.floor((uptimeInSeconds % (24 * 3600)) / 3600);
    const minutes = Math.floor((uptimeInSeconds % 3600) / 60);
    
    return `${days} days, ${hours} hours, ${minutes} minutes`;
}

function logUptime() {
    const uptimeInSeconds = os.uptime();
    const formattedUptime = formatUptime(uptimeInSeconds);
    
    console.log(`System Uptime: ${formattedUptime}`);
}

setInterval(logUptime,5000);
