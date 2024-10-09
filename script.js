// Para receber as entradas (inputs) e interagir com o usuário
let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");
let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");
let containerPassword = document.querySelector("#container-password");

// Para gerar a senha e armazenar senha
let charset = "abcdefghijklmnopqrstuvwyzABCDEFGHIJKLMNOPQRSTUVWYXZ0123456789!@#$%&";
let novaSenha = "";
sizePassword.innerHTML = sliderElement.value;
slider.oninput = function(){
    sizePassword.innerHTML = this.value;
}
function generatePassword(){
// Mensagem exibida na tela ao gerar a senha
    alert("Senha gerada com sucesso")
    let pass = "";
// Declarando variável contadora i e a lógica de incrementação do laço for
    for(let i = 0, n = charset.length; i < sliderElement.value; ++i) {
// Verificar a quantidade de dígitos disponíveis no charset e retornar um valor na variável pass
        pass += charset.charAt(Math.floor(Math.random() * n));
    }
// Remove a classe hide, que bloqueia as interações da tela
    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    novaSenha = pass;
}
function copyPassword() {
    navigator.clipboard.writeText(novaSenha);
// Mensagem exibida na tela ao copiar a senha
    alert("Senha copiada com sucesso")
}