// const usingMapProduct = [
//     {
//         name : 'doll game',
//         price : 2000
//     },
//     {
//         name : 'car game',
//         price : 1000
//     },
//     {
//         name : 'adult game',
//         price : 2000
//     },
//     {
//         name : 'old game',
//         price : 2000
//     },
// ]
// const names = usingMapProduct.map(product => product.name)
// console.log(names)
// const price = usingMapProduct.map(product => product.price)
// console.log(price)
// const useFilter = usingMapProduct.filter(product => product.price < 2000)
// console.log(useFilter)
// const useFilters = usingMapProduct.filter(product => product.name.includes('g' && 'o'));
// console.log(useFilters)
// const useFind = usingMapProduct.find(product => product.name.includes('g'));
// console.log(useFind)
// array and object destructuring
// object

// const { names, age } = { names: "safia", age: 14 };
// console.log(names, age);

// const employee = {
//   id: "VS code",
//   designation: "developer",
//   machine: "windows",
//   language: ["html", "Js"],
//   specification: {
//     height: 66,
//     wight: 67,
//   },
// };
// const { machine, id } = employee;
// console.log(machine, id);
// const { wight, height } = employee.specification;
// console.log(wight, height);
// const {language} = employee.language;
// console.log(language)

// const [x, y] = employee.language;
// console.log(x, y);

// const product = [
//   {
//     name: "doll game",
//     price: 2000,
//     brand: "sigma",
//   },
//   {
//     name: "car game",
//     price: 1000,
//     brand: "dilrub",
//   },
//   {
//     name: "adult game",
//     price: 2000,
//     brand: "sindhu",
//   }
// ];

// const newProducts = {
//   name: "old game",
//   price: 2000,
//   brand: "filk",
// };

// const storeNewArray = [...product, newProducts]
// console.log(storeNewArray)
// console.log(product)

