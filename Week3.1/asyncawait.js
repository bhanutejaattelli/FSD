function fetchUser() {
    return new Promise((resolve) => {
        setTimeout(() => resolve({ id: 1, name: "Alice" }), 1000);
    });
}

function fetchPosts(userId) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(["Post 1", "Post 2", "Post 3"]), 1000);
    });
}
  
// Promise Chaining
// fetchUser()
//     .then((user) => {
//         console.log("User:", user);
//         return fetchPosts(user.id);
//     })
//     .then((posts) => {
//         console.log("User's Posts:", posts);
//     });



async function fetchData() {
    let user = await fetchUser();
    console.log("User:", user);
    
    let posts = await fetchPosts(user.id);
    console.log("User's Posts:", posts);
}
    
fetchData();
    