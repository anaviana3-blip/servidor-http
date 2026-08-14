import http from'node:http';

const porta = 3000

const server = http.createServer();

server.on('request', (req, res) => {
    console.log('recurso criado', '$(req.method) $(req.url)');

    res.statusCode = 201;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({"chave":"valor"}));
});

server.listen(porta, () => {
    console.log('servidor ouvindo na porta $(porta)');
});