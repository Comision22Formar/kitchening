console.log('product-add-validator success!!')

const $ = (id) => document.getElementById(id);
const omitFields = [11,12,14,15];


window.addEventListener('load', async () => {

    try {

        let response = await fetch('https://apis.datos.gob.ar/georef/api/provincias')
        let {provincias} = await response.json();


        provincias.sort((a,b) => a.nombre > b.nombre ? 1 : a.nombre < b.nombre ? -1 : 0 ).forEach(({nombre}) => {
            const option = document.createElement('option');
            option.setAttribute('value', nombre)
            option.textContent = nombre
            $('province').appendChild(option)
        });
        
    } catch (error) {
        console.error
    }

})

$('province').addEventListener('change', async (e) => {
    
    try {

        let response = await fetch(`https://apis.datos.gob.ar/georef/api/localidades?provincia=${e.target.value}&max=1000`)
        let {localidades} = await response.json();
        
        $('city').innerHTML = null

        localidades.sort((a,b) => a.nombre > b.nombre ? 1 : a.nombre < b.nombre ? -1 : 0 ).forEach(({nombre}) => {
            const option = document.createElement('option');
            option.setAttribute('value', nombre);
            option.textContent = nombre;
            $('city').appendChild(option)
        });
        
    } catch (error) {
        console.error
    }
})


$('form-product-add').addEventListener('submit', function (e) {
    e.preventDefault()
    
    let error = false;

    for (let i = 0; i < this.elements.length - 2; i++) {
        if(!this.elements[i].value && !omitFields.includes(i)){
            error = true;
            this.elements[i].classList.add('is-invalid')
        }
    }

    
    !error ? this.submit() : $('msg-error').hidden = false
})