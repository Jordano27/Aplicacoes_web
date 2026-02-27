// Controlador para listar todos os produtos
function getAluno(req, res) {
    // Dados simulados de produtos (simula o acesso ao banco de dados)
    const alunos = [
        { id: 1, nome: "Jordano", curso: "ads", idade: "20" },
        { id: 2, nome: "Paulo", curso: "ads", idade: "19" },       
        { id: 3, nome: "Zé", curso: "agro", idade: "55" },    
        { id: 4, nome: "Felipe", curso: "agro", idade: "25" },
    ];
    // Define o status de sucesso e envia a lista de produtos como JSON
    res.statusCode = 200;
    res.end(JSON.stringify(alunos));
}
// Controlador para criar um novo produto
function createAluno(req, res) {
    let body = "";
    // Recebe os dados do corpo da requisição em partes (chunks)
    req.on("data", (chunk) => {
        body += chunk.toString();
    });
    // Processa os dados após a recepção completa
    req.on("end", () => {
        try {
            const novoAluno = JSON.parse(body); // Converte o corpo da requisiçãode JSON para um objeto
            novoAluno.id = Date.now(); // Gera um ID único (em uma aplicação real,o banco de dados geraria o ID)
    // Define o status de criação e envia o produto criado como resposta
    res.statusCode = 201;
    res.end(
        JSON.stringify({ message: "Aluno criado", aluno: novoAluno })
    );
} catch (error) {
    // Lida com erros de parsing JSON
    res.statusCode = 400;
    res.end(JSON.stringify({ message: "Erro ao processar o aluno" }));
}
 });
}
// Controlador para atualizar um produto
function updateAluno(req, res) {
    const id = req.url.split("/")[3]; // Extrai o ID da URL
    let body = "";
    // Recebe os dados do corpo da requisição em partes (chunks)
    req.on("data", (chunk) => {
        body += chunk.toString();
    });
    // Processa os dados após a recepção completa
    req.on("end", () => {
        try {
            const alunoAtualizado = JSON.parse(body); // Converte o corpo da requisição de JSON para um objeto
            alunoAtualizado.id = parseInt(id, 10); // Garante que o ID seja um número inteiro
            // Define o status de sucesso e envia o produto atualizado como resposta
            res.statusCode = 200;
            res.end(
                JSON.stringify({
                    message: "Aluno atualizado",
                    aluno: alunoAtualizado,
                })
            );
        } catch (error) {
            // Lida com erros de parsing JSON
            res.statusCode = 400;
            res.end(JSON.stringify({ message: "Erro ao processar o aluno" }));
        }
    });
}
// Controlador para deletar um produto
function deleteAluno(req, res) {
    const id = req.url.split("/")[3]; // Extrai o ID da URL
    // Define o status de sucesso e envia uma mensagem confirmando a exclusão
    res.statusCode = 200;
    res.end(JSON.stringify({ message: `Aluno com ID ${id} deletado` }));
}
// Exporta os controladores para serem usados em outros módulos
module.exports = {
    getAluno,
    createAluno,
    updateAluno,
    deleteAluno,
};
