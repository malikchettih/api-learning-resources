import express from 'express';

const app = express();
const PORT = 4000;

app.get('/', (request, response) =>{
    response.send(`Node and express server running on port ${PORT}`)
});

app.listen(PORT, () => {
    console.log(`You server is running on port ${PORT}`)
});
