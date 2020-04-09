import { getCars } from './app.js';

// crear los años
const years = document.createElement('option');
const  max = new Date().getFullYear();
let  min = max - 10;

for(let i = max; i >  min; i--) {
    let option =  document.createElement('option');
    option.value = i;
    option.innerText = i;
    document.querySelector('#year').appendChild(option);
}

let dataSrch = {
    marca: '',
    year:'',
    min: '',
    max: '',
    puertas: '',
    transmision: '',
    color: ''
}

const cars = getCars()

document.addEventListener('DOMContentLoaded', () => {
    listCars(cars)
})

const marca = document.querySelector('#marca')
marca.addEventListener('input', e => {
    dataSrch.marca = e.target.value
    carFilter()
})

const year = document.querySelector('#year')
year.addEventListener('#year', e => {
    dataSrch.year = Number(e.target.value)
    carFilter()
})

const _min = document.querySelector('#minimo')
_min.addEventListener('input', e => {
    dataSrch.min = Number(e.target.value)
    carFilter()
})

const _max = document.querySelector('#maximo')
_max.addEventListener('input', e => {
    dataSrch.max = Number(e.target.value)
    carFilter()
})

const doors = document.querySelector('#puertas')
doors.addEventListener('input', e => {
    dataSrch.puertas = Number(e.target.value)
    carFilter()
})

const trans = document.querySelector('#transmision')
trans.addEventListener('input', e => {
    dataSrch.transmision = e.target.value
    carFilter()
})

const clor = document.querySelector('#color')
clor.addEventListener('input', e => {
    dataSrch.color = e.target.value
    carFilter()
})

function listCars(cars) {
    const container = document.querySelector('#resultado')

    while(container.firstChild) {
        container.removeChild(container.firstChild)
    }

    cars.forEach(car => {
        const carHTML = document.createElement('p')
        carHTML.innerHTML = `
            <p> ${car.marca} ${car.modelo} - ${car.year} - ${car.puertas} puertas - Transmisión: ${car.transmision} - Color: ${car.color} - Precio: ${car.precio} $</p>
        `
        container.appendChild(carHTML)
    })
}

function carFilter() {
    const result = getCars()
                    .filter(brandFilter)
                        .filter(yearFilter)
                            .filter(minFilter)
                                .filter(maxFilter)
                                    .filter(doorsFilter)
                                        .filter(transFilter)
                                            .filter(colorFilter)
    console.log(result)
    if (result.length) {
        listCars(result)
    } else {
        alert('No hay resultados.')
    }
}

function brandFilter(car) {
    if (dataSrch.marca) {
        return car.marca === dataSrch.marca
    } else {
        return car
    }
}

function yearFilter(car) {
    if (dataSrch.year) {
        return car.year === dataSrch.year
    } else {
        return car
    }
}

const minFilter = car => dataSrch.min ? car.precio >= dataSrch.min : car

const maxFilter = car => dataSrch.max ? car.precio <= dataSrch.max : car

const doorsFilter = car => dataSrch.puertas ? car.puertas === dataSrch.puertas : car 

const transFilter = car => dataSrch.transmision ? car.transmision === dataSrch.transmision : car

const colorFilter = car => dataSrch.color ? car.color === dataSrch.color : car