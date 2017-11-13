var root = document.getElementById("root");
var ul = document.createElement("ul");

//function addList(){
root.appendChild(ul) // Ïðèêðåïëÿåì ê êîðíþ ñîçäàííûé ñïèñîê
//}


function createTag(ttt) {
    var li = document.createElement("li");
    var span = document.createElement("span");
    var del = document.createElement("button");
    span.textContent = ttt;
    del.textContent = "Óäàëèòü";   
    function deleteText(){  // Óäàëåíèå ýëåìåíòà li
        ul.removeChild(li);
    }
    del.onclick = deleteText();     // Ïðè íàæàòèè íà êíîïêó ýëåìåíò li óäàëÿåòñÿ
    li.appendChild(span);
    li.appendChild(del);
    function write(ttt) {
        ul.appendChild(li);     // Äîáàâëåíèå ýëåìåíòà li â ñïèñîê ul
    }
}
//addList();

var tt = "Сделать задание #3 по web-программированию";
createTag(tt);


var inpt = document.createElement("input");
var buttn = document.createElement("button");
inpt.id = "add_task_input";
buttn.id = "add_task";

function addInpt() {
    createTag(inpt.value); 
}

buttn.onclick = addInpt;        // Ïðè íàæàòèè íà êíîïêó äîáàâëÿåòñÿ íîâûé il

root.appendChild(inpt);
root.appendChild(buttn);
