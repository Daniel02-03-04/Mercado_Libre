const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('¡Hola Mundo! Estoy levantando un servidor')
});

app.listen(3009, () => console.log('Servidor corriendo en el puerto 3009'))