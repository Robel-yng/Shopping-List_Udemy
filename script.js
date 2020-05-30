var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItems = document.getElementsByTagName("li");

//returns the length of what user input in screen
function inputLength() {
    return input.value.length;
}



//function toggling(shopping_list) {
//   shopping_list.classlist.to("done")

//}

function createListElement() {
    //create list tag
    var li = document.createElement("li");
    //since there is no text in the list yet we want to append what the user inputted into the tag
    li.appendChild(document.createTextNode(input.value));
    //ul list is part of li tag
    ul.appendChild(li);
    //after the person inputs a value we want the text bar to be empty
    input.value = "";



    //creating delete button

    var deli = document.createElement("button");
    deli.appendChild(document.createTextNode("Delete"));
    li.append(deli);
    //when we press the delete function we will run the remove parent function which will the the li (shopping list), this is also called a call back function
    deli.onclick = removeParent;

}

function addListAfterClick() {
    //user clicks enter and text is above 0 go to function createlistelement
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    //if user enters enter on keyboard and has some text then it will go to function above createlistelement
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

function listLength() {
    return listItems.length;
}

//
button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

//this function adds delete button to first list
function deleteButton() {
    var btn = document.createElement("button");
    btn.appendChild(document.createTextNode("Delete!"));
    listItems[i].appendChild(btn);
    btn.onclick = removeParent;
}
//this loop adds a delete button to lists that the user did not add from second all the way to last, (Ones user did not add by textbox)

for (i = 0; i < listLength(); i++) {

    deleteButton();
}

//parent node refers to the tag under child so in this case ul is parent and we remove it,when we do that we also remove child
//evt.target gets the element that triggered a specifc event
function removeParent(evt) {
    evt.target.parentNode.remove();
}
//whe we click on an item in ul list we trigger an event in a tag and we toggle the class in css file
ul.onclick = function(event) {
    var target = event.target;
    target.classList.toggle("done");
}