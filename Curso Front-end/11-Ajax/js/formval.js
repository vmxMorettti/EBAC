
const form = document.getElementById('form');
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const cpf = document.getElementById('cpf');
const cep = document.getElementById('cep');
const rua = document.getElementById('rua');
const bairro = document.getElementById('bairro');
const cidade = document.getElementById('cidade');
const uf = document.getElementById('uf');
const mensagem = document.getElementById('mensagem');
const notNull = document.getElementsByClassName('not-null')

function isEmpty(elem){
    return elem.value.length < 2 ? `O campo <strong>${elem.name}</strong> não pode estar vazio.` : '';
}

function validaEmail(elem){
    return elem.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) ? '' : '<strong>email</strong> inválido'; 
}

function validaCEP(elem){
    if (!elem.value.match(/^[0-9]{8}/))
        return '<strong>cep</strong> inválido';
    else return '';
} 

function updateAdress(data){
    if (!('erro' in data)) {
        rua.value = (data.logradouro);
        bairro.value = (data.bairro);
        cidade.value = (data.localidade);
        uf.value = (data.uf);
        mensagem.innerHTML = ''

    } else {
        mensagem.innerHTML = '<strong>CEP</strong> não encontrado'
    }

}

form.addEventListener('submit', function(event) {
    event.preventDefault();

    let msg = [];
    let markup = '';
    
    Array.from(notNull).forEach(field => {
        let fieldState = isEmpty(field); 
        if (fieldState)
            msg.push(fieldState)
    });
    
    const isEmail = validaEmail(email);
    if(isEmail) msg.push(isEmail);
    
    const isCEP = validaCEP(cep);
    if(isCEP) {
        msg.push(isCEP);

    }else {
        const script = document.createElement('script');
        script.src = 'https://viacep.com.br/ws/' + cep.value + '/json?callback=updateAdress';
        document.body.appendChild(script)   

    }


    msg.forEach(item => {
        markup += `<p>${item}</p>`
    });


    mensagem.innerHTML = markup;

    // if(msg.length == 0) form.submit();
});