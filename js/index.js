// let number = 65;
// number = 44;
// console.log(number)


// const number = 65;
// number = 44; // This is not update, because this variable name const 
// console.log(number) 


// const myMoney = 10;

// if(myMoney > 20){
//     console.log('I want banana');
// }

// else if(myMoney < 120){
//     console.log('I want candi')
// }

// else if(myMoney === 100){
//     console.log('mango')
// }

// else if(myMoney !== 50){
//     console.log('Orange')
// }

// else if(myMoney <= 30){
//     console.log('froods')
// }

// else if(myMoney >= 200){
//     console.log('Water')
// }

// else{
//     console.log('Not found')
// }


// const a = 'Raju';
// const b = 'Hassan'

// if(a === 'Raju' && b === 'Hassan'){
//     console.log(a, b)
// }

// else{
//     console.log('Not found')
// }




// const a = 'Raju';
// const b = 'Hassan'

// if(a === 'Raju1' || b === 'Hassan'){
//     console.log(a, b)
// }

// else{
//     console.log('Not found')
// }



// const number = [10, 20, 30, 40, 50, 60, 70];

// console.log(number[0])
// console.log(number.length)

// number.push(80)
// console.log(number)

// number.pop()
// console.log(number)

// number[0]=100;
// console.log(number)

// const number = [10, 20, 30, 40, 50, 60, 70];

// for(let i =0; i<=number.length; i+=1){

//     const element = number[i];

//     console.log(element)
// }



// function callMe (num1, num2) {
//     console.log(num1+num2)
// }

// callMe(10, 10)


// const add = (num1, num2) => {
//     const result = num1 + num2
//     return result;
// }
// const sum = add(20, 20);
// console.log(sum)

// const computer = {
//     ram: '4GB',
//     hdd: '500GB',
//     motherboard: 'Asus G81',
//     monitor: 'Duel Monitor'
// }
// const search = 'motherboard';

// console.log(computer.ram)
// console.log(computer['hdd'])
// console.log(computer[search])

// -------------------------------------------------------------

// const computer = {
//     ram: '4GB',
//     hdd: '500GB',
//     motherboard: 'Asus G81',
//     monitor: 'Duel Monitor'
// }

// const postData = document.getElementById('post')
// const search = 'monitor'
// const cH1 = document.createElement('h1');
// cH1.innerHTML =`
// <h1>${computer.ram}</h1>
// <h1>${computer['hdd']}</h1>
// <h1>${computer[search]}</h1>
// `
// postData.appendChild(cH1)


// const getMoney = () =>500;
// console.log(getMoney())

// const getMoney = (a) =>a+500;
// console.log(getMoney(200))


// const getMoney =(a, b, c) =>{
//     const sum = a+b+c;
//     return sum 
// }
// const result = getMoney(10, 10, 10);
// console.log(result);

// const number = [30, 40, 50, 60, 70, 80, 90];
// const newNumber=[...number, 100];
// newNumber.push(33)

// console.log(number)
// console.log(newNumber)



// const money = [
//     {name:'amirul', tk: 555},
//     {name:'Raju', tk: 55566},
//     {name:'Anarul', tk: 55455},
//     {name:'t2', tk: 5555}
// ]

// // const result = money.map('tk')
// console.log(money[0].name)


// const student =[
//     {
//         name: 'panda',
//         job: 'MBBS',
//         work:{
//             business: {
//                 name: 'Tee Shopkeper',
//             },

//             service:{
//                 name:'MBBS'
//             }

//         }

//     }
// ]


// let newArray = [];
// newArray.push(student[0].work.service)
// console.log(newArray)


// const product = [
//     {name:'phone', brand:'apple', price: 4455},
//     {name:'phone', brand:'vivo', price: 4455},
//     {name:'phone', brand:'lenovo', price: 4455},
//     {name:'phone', brand:'Nokia', price: 4455},
// ]

// const brand = product.map(product =>product.brand);
// console.log(brand);



// const product = [
//     {name:'phone', brand:'apple', price: 4455},
//     {name:'phone', brand:'vivo', price: 4455},
//     {name:'phone', brand:'lenovo', price: 4455},
//     {name:'phone', brand:'Nokia', price: 4455},
// ]

// const brand = product.map(product =>product.brand);
// console.log(brand);

// const name = ['Sajid Hassan', 'Raju Hassan', 'Hera Khatun'];

// name.forEach(element => {
//     console.log(element)

// });



// const product = [
//     {name:'phone', brand:'apple', price: 4455},
//     {name:'phone', brand:'vivo', price: 4455},
//     {name:'phone', brand:'lenovo', price: 4455},
//     {name:'phone', brand:'Nokia', price: 4455},
// ]

// product.forEach(element => {
//     console.log(element.brand)

// });


// const number = [20, 30, 40, 50, 60, 70, 80];

// const low = number.filter(x => x>=50)
// console.log(low)



// const product = [
//     {name:'phone', brand:'apple', price: 4455},
//     {name:'phone', brand:'vivo', price: 4455},
//     {name:'laptop', brand:'lenovo', price: 4455},
//     {name:'pc', brand:'Nokia', price: 4455},
// ];


// const foundSpsal = product.filter(p =>p.name.includes('phone'))

// console.log(foundSpsal)




// const product = [
//     {name:'phone', brand:'apple', price: 4455},
//     {name:'phone', brand:'vivo', price: 4455},
//     {name:'laptop', brand:'lenovo', price: 4455},
//     {name:'pc', brand:'Nokia', price: 4455},
// ];


// const foundSpsal = product.find(p =>p.name.includes('phone'))

// console.log(foundSpsal)




// const [x, y ] = [10, 20];
// console.log(x,y)


// function boxfy (num1, num2){
//     const result = num1 + num2
//     return result;
// }

// const results = boxfy(10, 10);
// console.log(results);


// const {name, age} = {name:'Raju', age: 27, service:'MMBS'}

// console.log(name,age)

// const product = [
//     {name: 'Mobile', price: 5556, brand:'OPPO'},
//     {name: 'Laptop', price: 554, brand:'Lenovo'},
//     {name: 'Watch', price: 2327, brand:'Apple'},
//     {name: 'Desktop', price: 2325, brand:'HP'},
//     {name: 'Monitor', price: 8877, brand:'Esonic'},
// ]

// const convert =JSON.stringify(product)
// console.log(convert)

// const reConvert = JSON.parse(convert);
// console.log(reConvert);


// const computers = {
//     ram: '4GB',
//     hdd: '500GB',
//     motherboard: 'Asus G81',
//     monitor: 'Duel Monitor'
// }


// const keys = Object.keys(computers)
// console.log(keys)

// const values = Object.values(computers)
// console.log(values)


// const computers = {
//     ram: '4GB',
//     hdd: '500GB',
//     motherboard: 'Asus G81',
//     monitor: 'Duel Monitor'
// }

// for(const computer in computers){
//     console.log(computer)
// }


// const number = [10, 20, 30, 40, 50, 60, 70];

// number.push(80)
// number.pop()
// number.pop()

// console.log(number)



// const number = [10, 20, 30, 40, 50, 60, 70];
// console.log(number)

// const newNumber = [...number];
// newNumber.push(100)
// console.log(newNumber);


// -----------------------------------------------
// -----------------------------------------------
// Create a new array without one specific item  
// -----------------------------------------------
// -----------------------------------------------



// const myMoney = 40;

// let food = myMoney > 50 ? 'Banana' : 'Giv me Water';
// console.log(food) 


// const num = '121';
// const convert = +num;

// console.log(convert)


// const num = 121;
// const convert = num + '';

// console.log(convert)

// let isActivre = true;
// isActivre = !isActivre;
// console.log(isActivre)


// localStorage.setItem('items', 'items added')

// ---------------------------------------------------


// ---------------------------------------------------


// const product = [
//     {name: 'Mobile', price: 5556, brand:'OPPO'},
//     {name: 'Laptop', price: 554, brand:'Lenovo'},
//     {name: 'Watch', price: 2327, brand:'Apple'},
//     {name: 'Desktop', price: 2325, brand:'HP'},
//     {name: 'Monitor', price: 8877, brand:'Esonic'},
// ]

// console.log(product[0].name) //Dot Notation
// console.log(product[1]['name']) // Bracket Notation
// const watch = 'name';
// console.log(product[2][watch]) // Variable Bracket Notation



// const number = (num1 = 100) =>{
//     const result = num1 + 10;
//     return result;
// }
// const print = number();
// console.log(print)



// const originalArray = [1, 2, 3, 4, 5];
// const newArray = originalArray.filter(item => item !== 1);
// console.log(newArray); // Output: [1, 2, 4, 5]

