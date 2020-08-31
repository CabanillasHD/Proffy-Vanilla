//Procurar o botao
document.querySelector("#add-time")
    .addEventListener('click', cloneField);
// document.querySelector("#add-time").onclick = cloneField;
//Quando clicar no botao

//Executar uma ação
function cloneField() {
    console.log("Cheguei aqui");

    //Duplicar os campos. Que campos ?
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true); //boolean: true or false

    //limpar os campos, que campos ?
    const fields = newFieldContainer.querySelectorAll('input');

    // fields[0].value = ""
    // fields[1].value = ""
    
    fields.forEach(function(field){
        field.value = "";
    });

    //Colocar na página, onde ?
    document.querySelector("#schedule-items").appendChild(newFieldContainer);

}