
//BOTONES DE PROYECTOS
function mostrar(i){
    //tomo los tres botones
    let botones = document.querySelectorAll("nav button");
    botones[0].className = "";
    botones[1].className = "";
    botones[2].className = "";
    botones[i].className = "selected";

    if(i==0){
        document.getElementById("proyectos").style.display="block";
        document.getElementById("marcas").style.display="none";
        document.getElementById("descripcion").style.display="none";
    }
    if(i==1){
        document.getElementById("proyectos").style.display="none";
        document.getElementById("marcas").style.display="block";
        document.getElementById("descripcion").style.display="none";
    }
    if(i==2){
        document.getElementById("proyectos").style.display="none";
        document.getElementById("marcas").style.display="none";
        document.getElementById("descripcion").style.display="block";
    }
}
let items = document.querySelectorAll('.slider .list .item');
let prevBtn = document.getElementById('prev');
let nextBtn = document.getElementById('next');
let lastPosition = items.length - 1;
let firstPosition = 0;
let active = 0;

nextBtn.onclick = () => {
    active = active + 1;
    setSlider();
}
prevBtn.onclick = () => {
    active = active - 1;
    setSlider();
}
const setSlider = () => {
    let oldActive = document.querySelector('.slider .list .item.active');
    if(oldActive) oldActive.classList.remove('active');
    items[active].classList.add('active');
    // 
    nextBtn.classList.remove('d-none');
    prevBtn.classList.remove('d-none');
    if(active == lastPosition) nextBtn.classList.add('d-none');
    if(active == firstPosition) prevBtn.classList.add('d-none');
}
setSlider();

// set diameter
const setDiameter = () => {
    let slider = document.querySelector('.slider');
    let widthSlider = slider.offsetWidth;
    let heightSlider = slider.offsetHeight;
    let diameter = Math.sqrt(Math.pow(widthSlider, 2) + Math.pow(heightSlider, 2));
    document.documentElement.style.setProperty('--diameter', diameter+'px');
}
setDiameter();
window.addEventListener('resize', () => {
    setDiameter();
})

function showContent(id) {
    // Ocultar todos los contenidos
    document.querySelectorAll('.content').forEach(content => content.classList.remove('active'));
    // Mostrar el contenido seleccionado
    document.getElementById(id).classList.add('active');
}

// Referencias generales
const btnCart = document.querySelector('.container-cart-icon');
const containerCartProducts = document.querySelector('.container-cart-products');

btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle('hidden-cart');
});

// Variables globales
let allProducts = [];
const valorTotal = document.querySelector('.total-pagar');
const countProducts = document.querySelector('#contador-productos');
const cartEmpty = document.querySelector('.cart-empty');
const cartTotal = document.querySelector('.cart-total');
const rowProduct = document.querySelector('.cart-product-container');

// Función para agregar un producto al carrito
function agregarProducto(id, title, price, url) {
    const product = {
        id: id,
        title: title,
        price: price,
        imagenUrl: url, // Guardar la URL en lugar de la imagen local
        quantity: 1 // Inicializar cantidad
    };

    const exists = allProducts.some((prod) => prod.id === id);

    if (exists) {
        allProducts = allProducts.map((prod) => {
            if (prod.id === id) {
                prod.quantity++;
            }
            return prod;
        });
    } else {
        allProducts.push(product);
    }

    showHTML();
}

// Función para eliminar un producto
function eliminarProducto(id) {
    allProducts = allProducts.filter((prod) => prod.id !== id);
    showHTML();
}

// Función para sumar la cantidad de un producto
function sumarProducto(id) {
    allProducts = allProducts.map((prod) => {
        if (prod.id === id) {
            prod.quantity++;
        }
        return prod;
    });
    showHTML();
}

// Función para restar la cantidad de un producto
function restarProducto(id) {
    allProducts = allProducts.map((prod) => {
        if (prod.id === id && prod.quantity > 1) {
            prod.quantity--;
        }
        return prod;
    });
    showHTML();
}

// Función para actualizar la vista del carrito
const showHTML = () => {
    if (!allProducts.length) {
        cartEmpty.classList.remove('hidden');
        rowProduct.innerHTML = '';
        cartTotal.classList.add('hidden');
    } else {
        cartEmpty.classList.add('hidden');
        cartTotal.classList.remove('hidden');
        rowProduct.innerHTML = '';

        let total = 0;
        let totalOfProducts = 0;

        allProducts.forEach((product) => {
            const containerProduct = document.createElement('div');
            containerProduct.classList.add('cart-product');

            containerProduct.innerHTML = `
                <img class="product-image" src="${product.imagenUrl}" alt="${product.title}">
                <div class="info-cart-product">
                    <span class="cantidad-producto-carrito" id="cantidad-producto-${product.id}">${product.quantity}</span>
                    <p class="titulo-producto-carrito">${product.title}</p>
                    <span class="precio-producto-carrito">$${product.price}</span>
                    <button class="btn-restar" onclick="restarProducto(${product.id})">-</button>
                    <button class="btn-sumar" onclick="sumarProducto(${product.id})">+</button>
                </div>
                <svg class="icon-close" onclick="eliminarProducto(${product.id})" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                </svg>
            `;
            rowProduct.append(containerProduct);

            total += product.quantity * product.price;
            totalOfProducts += product.quantity;
        });

        valorTotal.innerText = `$${total}`;
        countProducts.innerText = totalOfProducts;
    }
};

// Función para realizar la compra
function realizarCompra() {
    alert("¡Compra realizada con éxito!");
    allProducts = [];
    showHTML();
}


