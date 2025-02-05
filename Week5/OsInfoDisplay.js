const os = require('os');
const hostname = os.hostname();
const platform = os.platform();
const uptime = os.uptime();
const totalMemory = os.totalmem() / (1024 * 1024); 
const freeMemory = os.freemem() / (1024 * 1024); 

console.log(`Hostname: ${hostname}`);
console.log(`Platform: ${platform}`);
console.log(`Uptime: ${uptime} seconds`);
console.log(`Total Memory: ${totalMemory.toFixed(2)} MB`);
console.log(`Free Memory: ${freeMemory.toFixed(2)} MB`);