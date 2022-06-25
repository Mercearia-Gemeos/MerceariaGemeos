const https = require('https');
const app = require('./app')
const port = process.env.PORT || 4000;
const server = https.createServer(app);

server.listen(port, () => console.log(`Rodando Server Na Porta ${port}`));

