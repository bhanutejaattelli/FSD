function fetchDataWithCallback(success = true, callback) {
    setTimeout(() => {
        if (success) {
            const data = { message: "Data fetched successfully!" };
            callback(null, data); 
        } else {
            const error = "Failed to fetch data.";
            callback(error, null); 
        }
    }, 2000); 
}

fetchDataWithCallback(true, (error, data) => {
    if (error) {
        console.error("Error:", error);
    } else {
        console.log("Success:", data);
    }
});

fetchDataWithCallback(false, (error, data) => {
    if (error) {
        console.error("Error:", error);
    } else {
        console.log("Success:", data);
    }
});