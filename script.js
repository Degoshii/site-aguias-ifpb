document.addEventListener('DOMContentLoaded', function() {
    // Verifica se o botão existe
    const backToTop = document.querySelector('.back-to-top');
    
    if (!backToTop) {
        console.error('Erro: Elemento com classe "back-to-top" não encontrado!');
        return;
    }

    // Mostra/oculta o botão ao rolar
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTop.style.display = 'block';
        } else {
            backToTop.style.display = 'none';
        }
    });

    // Rolagem suave ao clicar
    backToTop.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    console.log('Script carregado com sucesso!'); // Mensagem de confirmação
});

    // script formulario //
const form = document.getElementById("form")
const nome = document.getElementById("nome")
const email = document.getElementById("email")
const telefone = document.getElementById("telefone")
const peso = document.getElementById("peso")
const altura = document.getElementById("altura")
const data = document.getElementById("data")
const sexo = document.getElementById("sexo")
const experiencia = document.getElementById("experiencia")

form.addEventListener("submit", (event) =>{
    event.preventDefault();

    checkForm();

})
nome.addEventListener("blur", () =>{
    checkInputNome();
})
email.addEventListener("blur", () =>{
    checkInputEmail();
})
telefone.addEventListener("blur", () =>{
    checkInputTelefone();
})
peso.addEventListener("blur", () =>{
    checkInputPeso();
})
altura.addEventListener("blur", () =>{
    checkInputAltura();
})
data.addEventListener("blur", () =>{
    checkInputData();
})
sexo.addEventListener("blur", () =>{
    checkSelectSexo();
})
experiencia.addEventListener("blur", () =>{
    checkSelectExperiencia();
})
function checkInputNome(){
    const nomeValue = nome.value;

    if(nomeValue === ""){
        errorInput(nome,"Preencha um nome válido")
        // mensagem de erro //
    }else{
        const formItem = nome.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputEmail(){
    const emailValue = email.value;

    if(emailValue === ""){
        errorInput(email,"Preencha um email válido")
        // mensagem de erro //
    }else{
        const formItem = email.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputTelefone(){
    const telefoneValue = telefone.value;

    if(telefoneValue === ""){
        errorInput(telefone,"Preencha um telefone válido")
        // mensagem de erro //
    }else if(telefoneValue.lenght < 11){
        errorInput(telefone,"Preencha um telefone válido")   
    }else{
        const formItem = telefone.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputPeso(){
    const pesoValue = peso.value;

    if(pesoValue === ""){
        errorInput(peso,"Preencha um peso válido")
        // mensagem de erro //
    }else if(pesoValue > 300){
        errorInput(peso,"Preencha um peso válido")   
    }else{
        const formItem = peso.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputAltura(){
    const alturaValue = altura.value;

    if(alturaValue === ""){
        errorInput(altura,"Preencha uma altura válida")
        // mensagem de erro //
    }else if(alturaValue > 300){
        errorInput(altura,"Preencha uma altura válida")   
    }else{
        const formItem = altura.parentElement;
        formItem.className = "form-content"
    }
}
function checkInputData(){
    const dataValue = data.value;

    if(dataValue === ""){
        errorInput(data,"Preencha uma data")
        // mensagem de erro //
    }else{
        const formItem = data.parentElement;
        formItem.className = "form-content"
    }
}
function checkSelectSexo(){
    const sexoValue = sexo.value;

    if(sexoValue === ""){
        errorInput(sexo,"Preencha com um sexo")
        // mensagem de erro //
    }else{
        const formItem = sexo.parentElement;
        formItem.className = "form-content"
    }
}
function checkSelectExperiencia(){
    const experienciaValue = experiencia.value;

    if(experienciaValue === ""){
        errorInput(experiencia,"Preencha com sua experiência no basquete")
        // mensagem de erro //
    }else{
        const formItem = experiencia.parentElement;
        formItem.className = "form-content"
    }
}

function checkForm(){
    checkInputNome();
    checkInputEmail();
    checkInputTelefone();
    checkInputPeso();
    checkInputAltura();
    checkInputData();
    checkSelectSexo();
    checkSelectExperiencia();

    const formItems = form.querySelectorAll(".form-content")

    const isValid = [...formItems].every ( (item) => {
        return item.className === "form-content"
    });

    if(isValid){
        alert("Inscrição concluída com sucesso")
    }

    console.log(isValid)
}


function errorInput(input,message){
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a")

    textMessage.innerText = message;

    formItem.className =  "form-content error"
}

 