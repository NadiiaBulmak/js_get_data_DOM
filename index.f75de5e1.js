'use strict';
const population = [
    ...document.querySelectorAll('.population')
];
let totalPopulation = 0;
for (const pop of population)totalPopulation += +pop.textContent.split(',').join('');
let average = 0;
if (population.length !== 0) average = totalPopulation / population.length;
function changeData(total, averagePopulation) {
    document.querySelector('.total-population').textContent = `${total.toLocaleString()}`;
    document.querySelector('.average-population').textContent = `${averagePopulation.toLocaleString()}`;
}
changeData(totalPopulation, average);

//# sourceMappingURL=index.f75de5e1.js.map
