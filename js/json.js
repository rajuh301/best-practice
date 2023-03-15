const url = 'https://jsonplaceholder.typicode.com/posts'

fetch (url)
.then(res => res.json())
.then(data => showData(data))

const showData = (data) =>{

    data.forEach(element => {
        console.log(element.title)

        const showData = document.getElementById('showData');

        const cDiv = document.createElement('div');

        cDiv.innerHTML = `


        <h4>${element.title}</h4>
        
        `
        showData.appendChild(cDiv);





    });

}