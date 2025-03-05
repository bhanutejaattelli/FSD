const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

app.use(express.json());

const JWT_SECRET_KEY = 'your_secret_key_here';  

const users = [
    { id: 1, username: 'john', password: 'password123' },
    { id: 2, username: 'jane', password: 'mypassword' }
];

app.get('/users', (req, res) => {
    res.status(200).json(users);
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const user = users.find(u => u.username === username && u.password === password);

    if (!user) {
        return res.status(401).json({ message: 'Invalid details' });
    }

    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET_KEY, { expiresIn: '1h' });

    res.status(200).json({ token });
});

const verifyToken = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
        return res.status(403).json({ message: 'No token provided, authorization denied' });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET_KEY);
        req.user = decoded; 
        next(); 
    } catch (err) {
        res.status(401).json({ message: 'Invalid or expired token' });
    }
};

app.get('/protected', verifyToken, (req, res) => {
    res.status(200).json({ message: 'This is a protected route', user: req.user });
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
