const express = require("express")
const req = require("express/lib/request")
const app = express()

app.listen("3000",()=>{
    console.log("servidor levantado!")
})

//Al llamar a localhost:3000/products se debe mostrar el siguiente 
app.use(express.json())
const JSON =
{
  description: 'Productos',
  items: [
    { id: 1, nombre: 'Taza de Harry Potter' , precio: 300},
    { id: 2, nombre: 'FIFA 22 PS5' , precio: 1000},
    {  id: 3, nombre: 'Figura Goku Super Saiyan' , precio: 100},
    {  id: 4,  nombre: 'Zelda Breath of the Wild' , precio: 200},
    {  id: 5,  nombre: 'Skin Valorant' , precio: 120},
    {  id: 6, nombre: 'Taza de Star Wars' , precio: 220}
  ]
}

app.get("/",(req,res)=>{
    res.send(JSON.items)
})

//Crear endpoint para poder crear un producto nuevo
app.post('/',(req,res)=>{
    const nuevo = {
      id : JSON.items.length +1,
      nombre :req.body.nombre,
      precio :req.body.precio
    }
    JSON.items.push(nuevo)
    res.send(JSON.items)
})

//post es añadir
//put es actualizar

//Crear endpoint para poder actualizar un producto
app.put("/:id", (req, res) => {
    const found = JSON.items.some((item) => item.id === +req.params.id);
    if (found) {
      JSON.items.forEach((item) => {
        item.id = +req.params.id;
        item.nombre = req.body.nombre;
        item.precio = req.body.precio;
        res.send(item);
      });
    } else {
      res.status(404).send(`Product with id ${req.params.id} not found`);
    }
});


//Crear endpoint para poder eliminar un producto
app.delete('/:id',(req,res)=>{
    const found = JSON.items.some(item => item.id === +req.params.id)
    if(found){
      const filtrar = JSON.items.filter(item=> item.id !== +req.params.id)
      res.send(filtrar)
    }else{
      res.status(404).send(`the product id ${+req.params.id} is not found`)
    }
})


//Crear filtro por precio de producto
app.get('/precio:precio',(req,res)=>{
  const found2 = JSON.items.some(item=>item.precio > +req.params.precio)
  console.log(found2)
  if(found2){
    const filtrarPrecio = JSON.items.filter(item => item.precio > +req.params.precio)
    console.log(filtrarPrecio)
    res.send(filtrarPrecio)
  }else{
    res.status(404).send(`el precio ${+req.params.precio} esta muy alto`)
  }
})


//Crear filtro que muestre los productos con un precio entre 50 y 250.
app.get('/entre50_250',(req,res)=>{
  const entre50_250 = JSON.items.filter(item=>item.precio > 50 && item.precio < 250)
  res.send(entre50_250)
})


//Crear un filtro que cuando busque en postman por parámetro el id de un producto me devuelva ese producto
// app.get('/:id',(req,res)=>{
//   const buscarId = JSON.items.some(item=>item.id === +req.params.id)
//   if(buscarId){
//     const elId = JSON.items.filter(item=>item.id === +req.params.id)
//     res.send(elId)
//   }else{
//     res.status(404).send(`the id of product ${+req.params.id} is not found`)
//   }
// })

//Crear un filtro que cuando busque en postman por parámetro el nombre de un producto me devuelva ese producto
app.get('/:nombre',(req,res)=>{
  const buscaNombre = JSON.items.some(item=>item.nombre === req.params.nombre)
  console.log(buscaNombre)
  if(buscaNombre){
    const elNombre = JSON.items.filter(item=>item.nombre === req.params.nombre)
    console.log(elNombre)
    res.send(elNombre)
  }else{
    res.status(404).send(`the name ${req.params.nombre} is not found`)
  }
})