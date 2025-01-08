function mergeUserData(...userObjects){
    return Object.assign({}, ...userObjects);
}

const userDetails = {name: 'CVR', age: 20};
const userAddress = {address: 'Mangalpally', city: 'Hyderabad'};
const userPreferences = {theme: 'Engineering', language: 'EN'};

const mergeObj=mergeUserData(userDetails,userAddress, userPreferences);
//const merge=mergeUserData{...userDetails}
console.log(mergeObj)