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
            $('#list').append(`<li>`+i+`<input type="text" class="input-edit" value="${todoList[i]}">
            <button type="button" onclick="editText('${todoList[i]}')">Edit</button></li>`)
        } 
        else {
            $('#list').append(`<li>`+i+` ${todoList[i]} <a class="edit" href="#" onclick="effacerToDo(`+i+`)">X</a><a class="edit" href="#" onclick="afficherValeur('${todoList[i]}')"> E</a></li>`)
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
    const listToEdit = todoList.findIndex(element => element === arg)
    todoList.splice(listToEdit, 1, editedToDo)
    afficherValeur()
}

