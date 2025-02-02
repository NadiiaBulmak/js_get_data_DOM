'use strict';

const population = [...document.querySelectorAll('.population')];
let totalPopulation = 0;

for (const pop of population) {
  totalPopulation += +pop.textContent.split(',').join('');
}

const average = totalPopulation / population.length;

function changeData() {
  document.querySelector('.total-population').textContent =
    `${totalPopulation.toLocaleString()}`;

  document.querySelector('.average-population').textContent =
    `${average.toLocaleString()}`;
}

changeData();
