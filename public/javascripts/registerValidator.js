console.log('register validator success!');
const exRegEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
const exRegPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,12}$/

const $ = (id) => document.getElementById(id);

const checkEmail = async (email) => {
    try {

        const response = await fetch('http://localhost:3000/apis/users/check-email?email=' + email)
        const result = await response.json();

        return result.isRegisted       
        
    } catch (error) {
        console.error
    }
}

$('name').addEventListener('focus', function(){
    this.classList.remove('is-invalid')
});

$('surname').addEventListener('focus', function(){
    this.classList.remove('is-invalid')
});

$('email').addEventListener('focus', function(){
    this.classList.remove('is-invalid')
});

$('email').addEventListener('keydown', function(){
    $('error-email').innerHTML = null
});

$('password').addEventListener('focus', function(){
    this.classList.remove('is-invalid')
});

$('password2').addEventListener('focus', function(){
    this.classList.remove('is-invalid')
});

$('name').addEventListener('blur', function(){
    switch (true) {
        case !this.value:
            this.classList.add('is-invalid');
            $('error-name').innerHTML = "El nombre es obligatorio"
            break;
        case this.value.length < 2:
            this.classList.add('is-invalid');
            $('error-name').innerHTML = "Mínimo dos caracteres"
            break;
        default:
            this.classList.remove('is-invalid');
            $('error-name').innerHTML = null
            break;
    }
});

$('surname').addEventListener('blur', function(){
    switch (true) {
        case !this.value:
            this.classList.add('is-invalid');
            $('error-surname').innerHTML = "El apellido es obligatorio"
            break;
        case this.value.length < 2:
            this.classList.add('is-invalid');
            $('error-surname').innerHTML = "Mínimo dos caracteres"
            break;
        default:
            this.classList.remove('is-invalid');
            $('error-surname').innerHTML = null
            break;
    }
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
        case await checkEmail(this.value) :{
            this.classList.add('is-invalid');
            $('error-email').innerHTML = "El email ya está registrado"
            break;
        }
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
        case !exRegPass.test(this.value):
            this.classList.add('is-invalid');
            $('error-password').innerHTML = "Debe tener entre 6 y 12 caracteres, minúsucula, mayúscula y caracter especial"
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

$('password2').addEventListener('blur', function(){
    switch (true) {
        case !this.value.trim() :
            this.classList.add('is-invalid');
            $('error-password2').innerHTML = "La verificación es obligatoria"
            break;
        default:
            this.classList.remove('is-invalid');
            $('error-password2').innerHTML = null   
            break;
    }
});

$('password2').addEventListener('keyup', function(){
    switch (true) {
        case this.value != $('password').value :
            this.classList.add('is-invalid');
            $('error-password2').innerHTML = "Las contraseñas no coinciden"
            break;
        default:
            this.classList.remove('is-invalid');
            $('error-password2').innerHTML = null   
            break;
    }
});

$('remember').addEventListener('click', () => {
    $('error-remember').innerHTML = null

})


$('form-register').addEventListener('submit', function (e) {
    e.preventDefault()
    
    let error = false;

    for (let i = 0; i < this.elements.length - 2; i++) {
        if(!this.elements[i].value){
            error = true;
            this.elements[i].classList.add('is-invalid')
        }
    }

    if (!$('remember').checked){
        error = true;
        $('error-remember').innerHTML = "Debes aceptar los términos y condiciones"

    }
    
    !error ? this.submit() : $('msg-error').hidden = false
})