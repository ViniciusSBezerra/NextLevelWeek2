//Procurar Botao
document.querySelector("#add-time")
//pegando o click do botao
.addEventListener('click', cloneField)

//executando uma açao
function cloneField(){

    //Duplicar os campos, quais campos
   const NewFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

   //limpar os campos quais campos
   const fields = NewFieldContainer.querySelectorAll('input')

    fields.forEach(function(field){
        //pegar o field do momento e limpa
        field.value = ""
        
    })
   //colocando na pagina 
    document.querySelector('#schedule-items').appendChild(NewFieldContainer)
}