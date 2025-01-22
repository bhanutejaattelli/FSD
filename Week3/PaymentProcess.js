function fetchData(url, callback) {
    setTimeout(() => {
        const data = { name: "Bhanu", Age: 20 };
        callback(data); 
    }, 2000);
    console.log("Fetching data from API...");
}

function displayData(data) {
    console.log(`Name: ${data.name}, Age: ${data.Age}`); 
}

fetchData("https://api.example.com/data", (data) => {
    displayData(data); 
});