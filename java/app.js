//step 1: get DOM
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 7000;

nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
}



const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    const smoothScroll = (container, amount) => {
        let start = container.scrollLeft;
        let end = start + amount;
        let step = amount > 0 ? 15 : -15; // Controla el tamaño de los pasos
        let interval = setInterval(() => {
            start += step;
            if ((step > 0 && start >= end) || (step < 0 && start <= end)) {
                start = end; // Ajusta el valor final
                clearInterval(interval);
            }
            container.scrollLeft = start;
        }, 18); // Intervalo de tiempo (ajusta para velocidad)
    };

    nxtBtn[i].addEventListener('click', () => {
        smoothScroll(item, containerWidth);
    });

    preBtn[i].addEventListener('click', () => {
        smoothScroll(item, -containerWidth);
    });
});
function updateValue(id, increment) {
    const input = document.getElementById(id);
    let value = parseInt(input.value) || 0;
    value = Math.max(0, value + increment); // Evitar valores negativos
    input.value = value;
    updateTotalPassengers();
}

function updateTotalPassengers() {
    const adultos = parseInt(document.getElementById('adultos').value) || 0;
    const ninos = parseInt(document.getElementById('ninos').value) || 0;
    const bebes = parseInt(document.getElementById('bebes').value) || 0;
    const total = adultos + ninos + bebes;

    const pasajerosInput = document.getElementById('pasajerosInput');
    pasajerosInput.value = `${total} Pasajero${total !== 1 ? 's' : ''}`;
}

// Prevenir el cierre del dropdown al interactuar con él
document.getElementById('pasajerosDropdown').addEventListener('click', function(event) {
    event.stopPropagation();
});
// Función para actualizar el número de huéspedes
function updateGuests(type, change) {
    const adultInput = document.getElementById('adultCount');
    const childInput = document.getElementById('childCount');
    const guestInput = document.getElementById('guestInput');

    let adults = parseInt(adultInput.value);
    let children = parseInt(childInput.value);

    if (type === 'adults') {
        adults = Math.max(0, adults + change); // Evitar valores negativos
        adultInput.value = adults;
    } else if (type === 'children') {
        children = Math.max(0, children + change); // Evitar valores negativos
        childInput.value = children;
    }

    // Actualizar el input con el total de huéspedes
    const totalGuests = adults + children;
    guestInput.value = `${totalGuests} Huésped${totalGuests !== 1 ? 'es' : ''}`;
}
// Alternar la visibilidad del dropdown
    function toggleDropdown() {
        const menu = document.getElementById('dropdownMenu');
        menu.classList.toggle('show');
    }

    // Prevenir el cierre del dropdown al interactuar con él
    document.getElementById('dropdownContainer').addEventListener('click', function (event) {
        event.stopPropagation();
    });

    // Cerrar el dropdown al hacer clic fuera
    document.addEventListener('click', function () {
        const menu = document.getElementById('dropdownMenu');
        menu.classList.remove('show');
    });

    // Actualizar el conteo de huéspedes
    function updateCount(type, change) {
        const adultosInput = document.getElementById('adultosCount');
        const niñosInput = document.getElementById('niñosCount');
        const huéspedesInput = document.getElementById('huéspedesInput');

        let adultos = parseInt(adultosInput.value);
        let niños = parseInt(niñosInput.value);

        if (type === 'adultos') {
            adultos = Math.max(0, adultos + change); // Evitar valores negativos
            adultosInput.value = adultos;
        } else if (type === 'niños') {
            niños = Math.max(0, niños + change); // Evitar valores negativos
            niñosInput.value = niños;
        }

        // Actualizar el input con el total de huéspedes
        const totalHuéspedes = adultos + niños;
        huéspedesInput.value = `${totalHuéspedes} Huésped${totalHuéspedes !== 1 ? 'es' : ''}`;
    }
// Alternar la visibilidad del dropdown
function toggleDropdown() {
    const menu = document.getElementById('menuHuespedesList');
    menu.classList.toggle('show');
}

// Prevenir el cierre del dropdown al interactuar con él
document.getElementById('dropdownContenedor').addEventListener('click', function (event) {
    event.stopPropagation();
});

// Cerrar el dropdown al hacer clic fuera
document.addEventListener('click', function () {
    const menu = document.getElementById('menuHuespedesList');
    menu.classList.remove('show');
});

// Actualizar el conteo de huéspedes
function updateHuespedCount(tipo, cambio) {
    const inputAdultos = document.getElementById('inputAdultosCantidad');
    const inputNiños = document.getElementById('inputNiñosCantidad');
    const inputTotalHuespedes = document.getElementById('inputHuespedesTotal');

    let adultos = parseInt(inputAdultos.value);
    let niños = parseInt(inputNiños.value);

    if (tipo === 'adultos') {
        adultos = Math.max(0, adultos + cambio); // Evitar valores negativos
        inputAdultos.value = adultos;
    } else if (tipo === 'niños') {
        niños = Math.max(0, niños + cambio); // Evitar valores negativos
        inputNiños.value = niños;
    }

    // Actualizar el input con el total de huéspedes
    const totalHuespedes = adultos + niños;
    inputTotalHuespedes.value = `${totalHuespedes} Huésped${totalHuespedes !== 1 ? 'es' : ''}`;
}
// Alternar la visibilidad del dropdown
function toggleDropdown() {
    const menu = document.getElementById('menuPersonas');
    menu.classList.toggle('show');
}

// Prevenir el cierre del dropdown al interactuar con él
document.getElementById('dropdownContenedor').addEventListener('click', function (event) {
    event.stopPropagation();
});

// Cerrar el dropdown al hacer clic fuera
document.addEventListener('click', function () {
    const menu = document.getElementById('menuPersonas');
    menu.classList.remove('show');
});

// Actualizar el conteo de personas
function updateCount(tipo, cambio) {
    const entradaAdultos = document.getElementById('entradaAdultos');
    const entradaNiños = document.getElementById('entradaNiños');
    const entradaPersonas = document.getElementById('entradaPersonas');

    let adultos = parseInt(entradaAdultos.value);
    let niños = parseInt(entradaNiños.value);

    if (tipo === 'adultos') {
        adultos = Math.max(0, adultos + cambio); // Evitar valores negativos
        entradaAdultos.value = adultos;
    } else if (tipo === 'niños') {
        niños = Math.max(0, niños + cambio); // Evitar valores negativos
        entradaNiños.value = niños;
    }

    // Actualizar el input con el total de personas
    const totalPersonas = adultos + niños;
    entradaPersonas.value = `${totalPersonas} Persona${totalPersonas !== 1 ? 's' : ''}`;
}
document.querySelector('button[data-bs-toggle="modal"]').addEventListener('click', function () {
    // Obtener los valores del formulario
    let origen = document.getElementById('floatingInputGrid').value;
    let destino = document.getElementsByClassName('form-control')[1].value; // Obtener el valor del segundo input
    let fechaInicio = document.getElementsByClassName('calendario')[0].value;
    let fechaFin = document.getElementsByClassName('calendario')[1].value;

    // Actualizar el contenido del modal con los valores del formulario
    document.querySelector('.modal-body h6').textContent = `Vuelo disponible: ${origen} a ${destino}`;
    document.querySelector('.modal-body p:nth-of-type(1)').innerHTML = `<strong>Fecha de salida:</strong> ${fechaInicio}`;
    document.querySelector('.modal-body p:nth-of-type(2)').innerHTML = `<strong>Fecha de regreso:</strong> ${fechaFin}`;
});


