const jsonServer = require('json-server');
const cors = require('cors');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const port = 3000; // Puerto en el que se ejecutará el servidor

server.use(middlewares);
server.use(router);
server.use(cors());
server.use(cors({
  origin: 'http://localhost:4200'
}));

server.listen(port, () => {
  console.log(`JSON Server está corriendo en http://localhost:${port}`);
});
