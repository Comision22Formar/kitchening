console.log('login validator success!');

const exRegEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
const $ = (id) => document.getElementById(id);


$('email').addEventListener('focus', function(){
    this.classList.remove('is-invalid')
});

$('password').addEventListener('focus', function(){
    this.classList.remove('is-invalid')
});


$('email').addEventListener('blur', async function(){
    switch (true) {
        case !this.value:
            this.classList.add('is-invalid');
            $('error-email').innerHTML = "El email es obligatorio"
            break;
        case !exRegEmail.test(this.value):
            this.classList.add('is-invalid');
            $('error-email').innerHTML = "El email tiene un formato inválido"
            break;
        default:
            this.classList.remove('is-invalid');
            $('error-email').innerHTML = null
            break;
    }
});

$('password').addEventListener('blur', function(){
    switch (true) {
        case !this.value:
            this.classList.add('is-invalid');
            $('error-password').innerHTML = "La contraseña es obligatoria"
            break;
        default:
            this.classList.remove('is-invalid');
            $('error-password').innerHTML = null
            break;
    }
});

$('button-eye').addEventListener('click', function(){
   this.classList.toggle('fa-eye')
   this.classList.toggle('fa-eye-slash')
   $('password').type = $('password').type === "password" ? "text" : "password"
});


$('form-login').addEventListener('submit', function (e) {
    e.preventDefault()
    
    let error = false;

    for (let i = 0; i < this.elements.length - 2; i++) {
        if(!this.elements[i].value){
            error = true;
            this.elements[i].classList.add('is-invalid')
        }
    }
    
    !error ? this.submit() : $('msg-error').hidden = false
})