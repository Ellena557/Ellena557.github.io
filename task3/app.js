var r = document.getElementsById("root");
var ul = document.createElement("ul");

function addList(){
    r.appenChild(ul) // Прикрепляем к корню созданный список
}

function deleteText(){  // Удаление элемента li
    ul.removeChild(li);
}

function createTag() {
    var li = document.createElement("li");
    var span = document.createElement("span");
    var del = document.createElement("button");
    span.textContent = t;
    del.textContent = "Удалить";    
    del.onclick = deleteText();     // При нажатии на кнопку элемент li удаляется
    li.appendChild(span);
    li.appendChild(del);
}

function write(t) {
    createTag();    // Завершение действий с элементом li
    ul.appendChild(li);     // Добавление элемента li в список ul
}

var tt = "Сделать задание #3 по web-программированию";
write(tt);


var inpt = document.createElement("input");
var buttn = document.createElement("button");
inpt.id = "add_task_input";
buttn.id = "add_task";

function addInpt() {
    write(inpt.value); 
}

buttn.onclick = addInpt;        // При нажатии на кнопку добавляется новый il