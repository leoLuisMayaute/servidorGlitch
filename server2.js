//Crear un proyecto de servidor http en node.js que utilice la dependencia express, escuche en el puerto 8080 y tenga tres rutas get configuradas:A) '/' en esta ruta raíz, el servidor enviará string con un elemento de título nivel 1 (un h1 en formato HTML) que contenga el mensaje: 'Bienvenidos al servidor express' en color azul.B) '/visitas' donde con cada request, el servidor devolverá un mensaje con la cantidad de visitas que se hayan realizado a este endpoint. Por ej. 'La cantidad de visitas es 10'C) '/fyh' donde se devolverá la fecha y hora actual en formato objeto:{ fyh: '11/1/2021 11:36:04' }

const express = require('express');

const app = express();

const PORT = 8090;

let cantidadVisitas = 0;

app.get('/', (req, res) => {
    let respuesta = `<h1 style = "color : blue">Nivel 1</h1>`
    res.send(respuesta);
})

app.get('/visitas', (req, res) => {
    cantidadVisitas += 1;
    let mensaje = `La cantidad de visitas es ${cantidadVisitas}`;
    res.send(mensaje);
})

app.get('/fyh', (req, res) => {
    let fechaYHoraActuales = new Date;
    res.send(fechaYHoraActuales.toLocaleString());
})

const server = app.listen(PORT, () => {
    console.log(`servidor express escuchando en ${PORT}`);
})

server.on('error', error => console.log(`Error en servidor ${error}`));