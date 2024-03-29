import express from 'express';
import prisma from "./lib/db.js";

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/db', (req, res) => {
    prisma.user.create({
        data: {
            email: 'test222@gmail.com',
            username: 'test222'
        }
    }).then(user => {
        res.json(user);
    }).catch(error => {
        console.error("Error creating user:", error);
        res.status(500).json({ error: "Failed to create user" });
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});