const os = require('os');

function memoryUsage() {
    setInterval(() => {
        const total = os.totalmem();
        // console.log(total);
        const free = os.freemem();
        // console.log(free);
        const used = total - free;
        // console.log(free);

        const freeMemoryPercentage = (free / total) * 100;

        console.log(`Total Memory: ${(total / (1024 ** 2)).toFixed(2)} MB`);
        console.log(`Used Memory: ${(used / (1024 ** 2)).toFixed(2)} MB`);
        console.log(`Free Memory: ${(free / (1024 ** 2)).toFixed(2)} MB`);
        console.log(`Free Memory Percentage: ${freeMemoryPercentage.toFixed(2)}%\n`);
    }, 5000); 
}

memoryUsage();
