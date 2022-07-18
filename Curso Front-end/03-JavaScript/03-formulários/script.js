const form = document.querySelector("form");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const telefone = document.querySelector("#telefone");
const cep = document.querySelector("#cep")
const cidade = document.querySelector("#cidade")
const estado = document.querySelector("#estado")

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();
})

/* checar se o campo está vazio */
function checkInputs() {
    const nameValue = name.value;
    const emailValue = email.value;
    const telValue = telefone.value;
    const cepValue = cep.value;
    const cidadeValue = cidade.value;
    const estadoValue = estado.value;

    if (nameValue == "") {
        setError(name, "Preencha este campo");
    } else {
        setSucess(name);
    }
    
    if (emailValue == "") {
        setError(email, "Preencha este campo");
    } else {
        setSucess(email);
    }
        
        
    
    if (telValue == "") {
        setError(telefone, "Preencha este campo");
    } else {
        setSucess(telefone);
    }
    
    if (cepValue == "") {
        setError(cep, "Preencha este campo");
    } else {
        setSucess(cep);
    }
    
    if (cidadeValue == "") {
        setError(cidade, "Preencha este campo");
    } else {
        setSucess(cidade);
    }
    
    if (estadoValue == "") {
        setError(estado, "Preencha este campo");
    } else {
        setSucess(estado);
    }
    
    
    console.log(nameValue)
    console.log(emailValue)
}

function setError(input, mensage) {
    const div = input.parentElement;
    const small = div.querySelector("small");

    input.className = "error";
    small.innerText = mensage;
}

function setSucess(input) {
    const div = input.parentElement;
    const small = div.querySelector("small");

    input.className = "sucess";
    small.innerText = ""

}
