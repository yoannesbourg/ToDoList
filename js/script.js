const todoList = []

function enregistrerValeur () {
    const valeur = $('.title').val()
    todoList.push(valeur)
    clearInput ()
    afficherValeur()  
}

function clearInput () {
    $('.title').val("")
}

function afficherValeur (arg = null) {
    $('#list > li').remove();
    for (i = 0; i < todoList.length; i++){
        if (i === arg) {
            $('#list').append(
                `<li><input type="text" class="input-edit" value="${todoList[i]}">
                <button type="button" onclick="editText(${i})">Edit</button></li>`)
        } 
        else {
            $('#list').append(
                `<li>${todoList[i]} 
                <a class="edit" href="#" onclick="effacerToDo(${i})">X</a>
                <a class="edit" href="#" onclick="afficherValeur(${i})"> E</a></li>`)
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

function pressEnter (e) {
    if (e.keyCode === 13) {
        enregistrerValeur()
    }
}
   