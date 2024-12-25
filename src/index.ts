import express from 'express';

const app = express();
const port = process.env.PORT ?? 3001

app.get('/', (req, res) => {
    res.send('Hello World!')
    console.log('response sent')
})


app.listen(port, () => {
    console.log(`App started and listening on port: ${port}`)
})
