// Procurar o botão
document.querySelector("#add-time")
// Quando clicar no botão
.addEventListener('click', cloneField)

// Executar uma ação
function cloneField() {

    // Duplicar os Campos. Que campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) //boolean = true ou false

    // pegar os campos. que campos?
    const fields = newFieldContainer.querySelectorAll('input')

    //para cada campo, limpar
    fields.forEach(function(field) {
        //pegar o field do momento
        console.log(field)
        //pega o field do momento e limpa ele
        field.value=""
    })


    // Colocar na página. Onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}



