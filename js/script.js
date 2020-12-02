const todoList = []

function enregistrerValeur () {
    const valeur = $('.title').val()
    todoList.push(valeur)
    afficherValeur()
}

function afficherValeur (arg = null) {
    console.log("entre afficher "+arg)
    
    $('#list > li').remove();
    for (i = 0; i < todoList.length; i++){
        if (todoList[i] === arg) {
            $('#list').append(`<li><input type="text" class="input-edit" value="${todoList[i]}">
            <button type="button" onclick="editText(` + i +`)">Edit</button></li>`)
        } 
        else {
            $('#list').append(`<li>${todoList[i]} <a class="edit" href="#" onclick="effacerToDo(` + i +`)">X</a><a class="edit" href="#" onclick="afficherValeur('${todoList[i]}')"> E</a></li>`)
        }
    }
}



function effacerToDo (arg) {
    console.log('arg effacer' + arg)
    todoList.splice(arg, 1)
    afficherValeur()
    
}

function editText (arg) {
    const editedToDo = $('.input-edit').val()
        todoList.splice(arg, 1, editedToDo)
        afficherValeur()
}

// function editText (arg) {
//     const editedToDo = $('.input-edit').val()
//     const listToEdit = todoList.findIndex(element => element === arg)
//     todoList.splice(listToEdit, 1, editedToDo)
//     afficherValeur()
// }

var input = $('.title')
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        $("#button").click();
    }
})