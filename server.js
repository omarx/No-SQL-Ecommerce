const http = require('http');
const {mongoConnect} = require('./services/mongo')
const app = require('./app');
require('dotenv').config();
port = process.env.PORT || 3001;

const server = http.createServer(app);

const startServer = async () => {
    await mongoConnect();
    server.listen(port, () => {
        return true;
    });
}

startServer().then(() => console.log(`Server is running on ${port}`))
    .catch((err) => {
        console.error(`Error: ${err}`)
    })