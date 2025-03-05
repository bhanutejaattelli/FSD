const express = require('express');
const app = express();

app.use(express.json()); 

app.get('/', (req, res) => {
    res.status(200).json({ message: "This is express" });
});

let users = [
    { id: 1, name: 'Aadarsh', email: 'aadarsh@example.com' },
    { id: 2, name: 'bhanu', email: 'bhanu@example.com' }
];

app.post('/users', (req, res) =>{
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(400).json({ message: "Name and Email are required" });
    }
    const newUser = { id: users.length + 1, name, email };
    users.push(newUser);
    res.status(201).json(newUser);
});

app.get('/users', (req, res) => {
    res.status(200).json(users);
});

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users.find(user => user.id == id);
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
});

app.put('/users/:id', (req, res) => {
    const id = req.params.id;
    const { name, email } = req.body;
    const user = users.find(user => user.id == id);
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    user.name = name || user.name;
    user.email = email || user.email;

    res.status(200).json(user);
});


app.delete('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users.find(user => user.id == id);
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    const index = users.indexOf(user);
    users.splice(index, 1);
    res.status(200).json({ message: "User deleted" });
});

app.listen(3000, () => console.log(`Server running on http://localhost:3000`));
