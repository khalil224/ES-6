const array = {
    name: 'samsung', price: 33000, weight: '200gm', color: 'lightblue', version: '6th', model: 'A91'
}
const { name, price, weight, color, version, model } = array;
/* console.log(name, price)
console.log(name, version)
console.log(name, model)
console.log(name, color)
console.log(name, weight)
console.log(price, model) */
const company = {
    name: 'GP',
    ceo: { id: 1, name: 'ajmol', food: 'fuska' }, web: { work: 'website development', employee: 22, framework: 'react' }

};
/* const work = company.web.work;
const framework = company.web.framework; */
const { work, framework } = company.web;
const { food } = company.ceo.food;
