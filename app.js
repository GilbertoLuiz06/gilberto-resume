var app = require('./config/server') // Cria a variável 'app' e importa as configurações do servidor

app.listen(5000, function() { // Aqui inicia o servidor na porta 5000
    console.log('Servidor rodando na porta: 5000')

})