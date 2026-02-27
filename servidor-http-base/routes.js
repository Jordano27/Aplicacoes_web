const { getAluno, createAluno, updateAluno, deleteAluno } =
    require('./controllers/alunosController');
function handleRequest(req, res) {

    res.setHeader('Content-Type', 'application/json');
    const routeKey = `${req.method} ${req.url}`;
    switch (true) {
        case routeKey === 'GET /api/alunos':
            getAluno(req, res);
            break;
        case routeKey === 'POST /api/alunos':
            createAluno(req, res);
            break;
        case req.url.startsWith('/api/alunos/') && req.method === 'PUT':
            updateAluno(req, res);
            break;
        case req.url.startsWith('/api/alunos/') && req.method === 'DELETE':
            deleteAluno(req, res);
            break;
        default:
            res.statusCode = 404;
            res.end(JSON.stringify({ message: 'Rota não encontrada' })); 
            break;
    }
}
module.exports = { handleRequest };