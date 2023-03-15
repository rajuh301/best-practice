const inputConvert = (data) =>{
    const inputData = document.getElementById(data);
    const convert = inputData.value;
    return convert
} 

const showData = document.getElementById('submit').addEventListener('click', function(){
    const fName = inputConvert('fName')
    const lName = inputConvert('lName')
    const age = inputConvert('age')
    const subject = inputConvert('subject')
    const data = {firstName : fName, LastName: lName, Age: age, Subject: subject};
    const convertData = JSON.stringify(data);
    localStorage.setItem('Data',convertData);
})

const showinfo = localStorage.getItem('Data')
const showinfoConvert = JSON.parse(showinfo)
console.log(showinfoConvert);
