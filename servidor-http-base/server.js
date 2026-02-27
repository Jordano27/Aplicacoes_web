const http = require("http");
const { handleRequest } = require("./routes");
const PORT = 3000;
const server = http.createServer((req, res) => {
    handleRequest(req, res);
});
server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});