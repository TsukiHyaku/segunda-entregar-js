class Producto{
    constructor(id, cantidad, nombre, precio, imagen){
        this.id = id,
        this.cantidad = cantidad,
        this.nombre = nombre,
        this.precio = precio,
        this.imagen = imagen
    }
    /* mostrarDatos(){
        console.log(`el producto es ${this.nombre} y su precio es $${this.precio}`)
    } */
}

let carrito = []

const btnVaciar = document.getElementById("vaciar-carrito")

const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = ""
    carrito.forEach((prod) => {
        const div = document.createElement("div")
        div.className = ("productoEnCarrito")
        div.innerHTML = `
        <p> ${prod.nombre}</p>
        <p>Precio: ${prod.precio}</p>
        <p>Cantidad: <span id="cantidad"> ${prod.cantidad}</p>
        <button onclick= "eliminarDelCarrito(${prod.id})" class="btn-eliminar" >Eliminar</button>`
        contenedorCarrito.appendChild(div)
    })
    contadorCarrito.innerText = carrito.length
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.precio, 0)
}

btnVaciar.addEventListener(`click`, ( ) =>{
    carrito.length = 0
    actualizarCarrito( )
})

// creacion de productos
const producto1 = new Producto(1, 1, "leche", 150, "leche.jpg")
const producto2 = new Producto(2, 1, "galletitas", 100, "galletas.jpg")
const producto3 = new Producto(3, 1, "cerveza", 230, "cerveza.jpg")
const producto4 = new Producto(4, 1, "manteca", 200, "manteca.jpg")
const producto5 = new Producto(5, 1, "azucar", 100 , "azucar.jpg")
const producto6 = new Producto(6, 1, "arroz", 150 , "arroz.jpg") 
const producto7  = new Producto(7, 1, "Papas lays ", 230, "papas-lays.jpg")
const producto8  = new Producto(8, 1, "Doritos", 230, "doritos.jpg")

let stockProductos = []
stockProductos.push(producto1, producto2,producto3, producto4, producto5, producto6, producto7, producto8)


// Codigo nuevo

const contenedorProdctos = document.getElementById("contenedor-productos")
const precioTotal = document.getElementById("precioTotal")
const contadorCarrito = document.getElementById("contadorCarrito")
const contenedorCarrito = document.getElementById("carrito-contenedor")


function agregarAlCarrito(prodID){
    const existe = carrito.some(prod => prod.id === prodID)
    if(existe){
        const prod = carrito.map(prod => {
            if(prod.id === prodID){
                prod.cantidad++
            }
        })
    }else{
    const item = stockProductos.find((prod) => prod.id === prodID)
    carrito.push(item)
    console.log(carrito)
}
actualizarCarrito()
}


stockProductos.forEach((Producto) => {
    const div = document.createElement("div")
    div.classList.add("producto")
    div.innerHTML = `
    <div id= "${Producto.id}" class="card" style="width: 18rem; background-color:  rgb(185, 159, 210);">
     <img src="./imagenes/${Producto.imagen}" style="height: 250px;" class="card-img-top" alt="Molten gg7X">
     <div class="card-body">
       <h5 class="card-title">${Producto.nombre}</h5>
       <p class="precio">Precio: $${Producto.precio}</p>
       <a href="#" id="btnAgregar${Producto.id}" class="btn btn-outline-success " style= "background-color: purple;">Agregar al carrito.</a>
    </div>`
    contenedorProdctos.appendChild(div)
    const btn = document.getElementById(`btnAgregar${Producto.id}`)
    btn.addEventListener(`click`, () =>{
        agregarAlCarrito(Producto.id)
    })
})



const eliminarDelCarrito = (prodID) => {
    const item = carrito.find((prod) => prod.id === prodID)
    const indice = carrito.indexOf(item)
    carrito.splice(indice, 1)
    actualizarCarrito()
}

let btnOcultarCarrito = document.getElementById(`btnOcultarCarrito`)

function borrarMenuCarrito(){
    contenedorCarrito.innerHTML = ``
}

btnOcultarCarrito.addEventListener("click", borrarMenuCarrito)

//Logearsey Registrarse
function signup(e){
    event.preventDefault( )
    let email = document.getElementById('email').value
    let username =  document.getElementById('username').value
    let pass =  document.getElementById('password').value

    let user = {
        email: email,
        username: username,
        password: pass,
    }

    let json = JSON.stringify(user)
    localStorage.setItem(username, json)
    console.log('Usuario agregado')
}

    function loginFunc (e){
        event.preventDefault( )
        let email = document.getElementById('email').value
        let pass =  document.getElementById('password').value
        let resultado = document.getElementById('resultado').value

        let user = localStorage.getItem(username)
        let data = JSON.parse(user)
        console.log(data)

    if(user == null){
        resultado.innerHTML = 'Username Equivocado'
    }else if(
        username == data.username && pass == data.password){
            resultado.innerHTML = 'Iniciando Sesion'
    }else{
        resultado.innerHTML = 'Contraseña Equivocada'
    }
}