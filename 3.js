let addToplayauto = document.getElementById('addToDo');
let toDoContainer = document.getElementById('gameContainer');
ByteLengthQueuingStrategy
break
addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('line-styling');
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild
    inputField.value = "";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    })
})

