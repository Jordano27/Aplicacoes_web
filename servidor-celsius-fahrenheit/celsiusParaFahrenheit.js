const http = require('http');
const url = require('url');
const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
// formula calculo (C * 1,8) + 32

//Exemplo de URL = http://localhost:3000/calculaTemperatura?num1=0
    if (parsedUrl.pathname === '/calculaTemperatura') {
        const num1 = parseFloat(parsedUrl.query.num1);
        if (isNaN(num1)) {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ erro: 'Parâmetros inválidos' }));
            return;
        }
        const resultado = (num1 * 1.8) + 32;
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify( {celsius: num1 + "°C", fahrenheit: resultado + "°F"} ));
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Rota não encontrada');
    }
});
server.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});
