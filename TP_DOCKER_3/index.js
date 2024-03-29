import express from 'express';
import prisma from "./lib/db.js";

const app = express();

app.get('/', (req, res) => {
    prisma.user.create({
        data: {
            email: 'test222@gmail.com',
            username: 'test222'
        }
    }).then(user => {
        res.json(user);
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});