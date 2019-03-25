const jsonServer = require('json-server');
const path = require('./db/data.json');
const server = jsonServer.create();
const router = jsonServer.router(path);
const middlewares = jsonServer.defaults();
const port_to_run = 3001;

server.use(middlewares);
server.use(router);
server.listen(port_to_run, () => {
    console.log('JSON Server is running');
});

