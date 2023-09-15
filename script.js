
let nome = document.getElementById("name");
let number = document.getElementById("number");
let email = document.getElementById("email");
let btn = document.getElementById("btn");

btn.addEventListener("click", function() { 
  alert(`Obrigado ${nome.value} por se cadastrar. Foi enviado um email para ${email.value}`)

  
  nome += nome.value
  number.value = "";
  email.value = "";

});

function abrirFace() {
    window.open("http://www.facebook.com.br", "_blank");
}
function abrirWhats() {
    window.open("https://www.whatsapp.com", "_blank");
}
function abrirInsta() {
    window.open("https://www.instagram.com", "_blank");
}
function abrirPlay() {
    window.open("https://play.google.com", "_blank");
}
function abrirStore() {
    window.open("https://www.apple.com/br/app-store/", "_blank");
}


