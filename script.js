// JavaScript functionality for car listing website

// Function to display the list of cars
function displayCars(cars) {
    const carList = document.getElementById('car-list');
    carList.innerHTML = '';
    cars.forEach(car => {
        const carItem = document.createElement('div');
        carItem.className = 'car-item';
        carItem.innerHTML = `<h2>${car.make} ${car.model}</h2>\n        <p>Year: ${car.year}</p>\n        <p>Price: $${car.price}</p>`;
        carList.appendChild(carItem);
    });
}

// Example data
let cars = [
    { make: 'Toyota', model: 'Camry', year: 2020, price: 24000 },
    { make: 'Honda', model: 'Accord', year: 2021, price: 26000 },
    { make: 'Ford', model: 'Mustang', year: 2019, price: 30000 }
];

// Display cars on page load
window.onload = function() {
    displayCars(cars);
};