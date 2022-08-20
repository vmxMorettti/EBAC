/* import fetch from 'node-fetch'  */

let _data = {
    title: 'teste de envio',
    body: 'lorem ipsum',
    userId: 5
}

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(_data),
    headers: {
        'Content-Type' : 'aplication/json; charset=UTF-8'
    }
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))