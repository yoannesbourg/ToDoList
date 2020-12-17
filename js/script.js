

const todoList = []

function enregistrerValeur () {
    const valeur = $('.title').val()
    if (valeur.length > 0) {
        todoList.push(valeur)
        clearInput ()
        afficherValeur()    
    } 
}

function clearInput () {
    $('.title').val("")
}

const todosElement = document.querySelectorAll("#list > li")
//Remplacer afficherValeur en JavaScript
/*for (i = 0; i < todosElement.length; i++) {
    const todoElt = todosElement[i]
    todoElt.addEventListener("click", (event) => console.log(event))
}*/

function afficherValeur (arg = null) {
    $('#list > li').remove();
    for (i = 0; i < todoList.length; i++){
        if (i === arg) {
            $('#list').append(
                `<li ><input type="text" class="input-edit" value="${todoList[i]}" onkeydown="pressEnterEdit(event, ${i})">
                <button type="button" onclick="editText(${i})">Edit</button></li>`)
            $('.fake-body').attr('onclick','editText(' + i + ')')
        } 
        else {
            $('#list').append(
                `<li id="${i}" onclick="afficherValeur(${i})">${todoList[i]}
                <span onclick="afficherValeur(${i})" class="edit"> 
                <a  href="#" onclick="effacerToDo(${i})"><span class="material-icons">
                delete
                </span></a>
                <a  href="#" onclick="afficherValeur(${i})"><span class="material-icons">
                create
                </span></a>
                </span>
                </li>`)
        }
    }
}

function effacerToDo (arg) {
    console.log(arg)
    todoList.splice(arg, 1)
    afficherValeur()
}

function editText (arg) {
    console.log(todoList)
    const editedToDo = $('.input-edit').val()
    todoList.splice(arg, 1, editedToDo)
    afficherValeur()
    $('.fake-body').attr('onclick', '')
}

function pressEnter (e) {
    if (e.keyCode === 13) {
        enregistrerValeur()
    }
}

function pressEnterEdit (e, arg) {
    if (e.keyCode === 13) {
        const editedToDo = $('.input-edit').val()
        todoList.splice(arg, 1, editedToDo)
        afficherValeur()
    }
}

//Remplacer attr onclik et JS dans HTML par des vrai .on click
//Mettre onclick sur tout le DOM, si
/*$('body).on('click', () => {
    const button = $('button')

    if (button.contains(event.target)) {
        return
    }
})*/
//si on clicke sur le bouton il se passe rien

//si non tu faus ton action
//console.log('clicked outside')


