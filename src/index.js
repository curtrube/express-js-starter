import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!')
    console.log('response sent')
})

app.listen(port, () => {
    console.log(`App started and listening on port: ${port}`)
})
