import './style.scss'
import img from './pexels-red-zeppelin-12969306.jpg'

function creatH1(msg){
    let elemH1 = document.createElement('h1')
    elemH1.innerText = msg
    elemH1.classList.add('title')
    return elemH1

}

function addImg() {
    const elemIMG = new Image()
    elemIMG.src = img
    return elemIMG

}

document.body.appendChild(creatH1('Hello world'))
document.body.appendChild(addImg())