const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Rota GET para testar a API
app.get('/', (req, res) => {
  res.send('Olá, mundo!');
});

// Rota POST para simular o recebimento de dados
app.post('/echo', (req, res) => {
  res.json({ message: "Você enviou: ", body: req.body });
});

// O servidor está escutando na porta especificada
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
