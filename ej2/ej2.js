const express = require("express");
const app = express();

app.listen("4000",()=>{
    console.log("Servidor funcionando correctamente")
})

//Ruta: Raíz del sitio (‘/’) ,Metodo: get, Acción: Mostrar un mensaje de bienvenida
app.get('/holamundo',(req,res)=>{
    res.send('Hola mundo')
})

//Ruta: Productos, Método: get, Acción: Mostrar un mensaje que diga: listado de productos
app.get('/productosGet',(req,res)=>{
    res.send('listado de products')
})

//Ruta: Productos, Método: post, Acción: Mostrar un mensaje que diga: crear un producto
app.post('/productosPost',(req,res)=>{
    res.send('Crear un producto')
})

//Ruta: Productos, Método: put, Acción: Mostrar un mensaje que diga: actualizar un producto
app.put('/productosPut',(req,res)=>{
    res.send('actualizar un producto')
})

//Ruta: Productos, Método: delete, Acción: Mostrar un mensaje que diga: borrar un producto
app.delete('/productosDelete',(req,res)=>{
    res.send('borrar un producto')
})

//Ruta: Usuarios, Metodo: get, Acción: Mostrar un mensaje que diga: listado de usuarios
app.get('/usuariosGet',(req,res)=>{
    res.send('listado de usuarios')
})

//Ruta: Usuarios, Método: post, Acción: Mostrar un mensaje que diga: crear un usuario
app.post('/usuariosPost',(req,res)=>{
    res.send('crear un usuario')
})

//Ruta: Usuarios, Metodo: put, Acción: Mostrar un mensaje que diga: actualizar un usuario
app.put('/usuariosPut',(req,res)=>{
    res.send('actualizar un usuario')
})

//Ruta: Usuarios, Metodo: delete, Acción: Mostrar un mensaje que diga: borrar un usuario
app.delete('/usuariosDelete',(req,res)=>{
    res.send('borrar un usuario')
})

//Utilizar Postman para probar todos los llamados
//-------------Funciona!!!----------------