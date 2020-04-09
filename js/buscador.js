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

function listCars(cars) {
    const container = document.querySelector('#resultado')

    cars.forEach(car => {
        const carHTML = document.createElement('p')
        carHTML.innerHTML = `
            <p> ${car.marca} ${car.modelo} - ${car.year} - ${car.puertas} puertas - Transmisión: ${car.transmision} - Color: ${car.color} - Precio: ${car.precio} $</p>
        `
        container.appendChild(carHTML)
    })
}

function carFilter() {
    const result = getCars().filter(brandFilter)
    console.log(result)
}

function brandFilter(car) {
    if (dataSrch.marca) {
        return car.marca === dataSrch.marca
    } else {

    }
}