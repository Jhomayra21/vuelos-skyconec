
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
function showOffer(tarifa) {
    var titulo = '';
    var descripcion = '';

    // Dependiendo de la tarifa seleccionada, mostrar la oferta correspondiente
    if (tarifa === 'Super Eco') {
        titulo = 'Oferta Super Eco';
        descripcion = '¡Aprovecha un 10% de descuento en tu próxima compra con Super Eco!';
    } else if (tarifa === 'Eco') {
        titulo = 'Oferta Eco';
        descripcion = '¡Obten un 5% de descuento en servicios adicionales al reservar Eco!';
    } else if (tarifa === 'Flex') {
        titulo = 'Oferta Flex';
        descripcion = '¡Reserva Flex ahora y recibe 15% de descuento en cambios de vuelo!';
    }

    // Mostrar el modal con la oferta
    document.getElementById('tituloOferta').innerText = titulo;
    document.getElementById('descripcionOferta').innerText = descripcion;
    document.getElementById('modalOferta').style.display = 'block';
}

// Función para cerrar el modal
function closeModal() {
    document.getElementById('modalOferta').style.display = 'none';
}

// Función para agregar el descuento (ejemplo de acción al hacer clic en el botón)
function addDiscount() {
    alert('¡Descuento agregado al viaje!');
    closeModal(); // Cerrar el modal después de agregar el descuento
}