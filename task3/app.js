var r = document.getElementById("root");
var ul = document.createElement("ul");
vat ttt;

//function addList(){
r.appenChild(ul) // Ïðèêðåïëÿåì ê êîðíþ ñîçäàííûé ñïèñîê
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
        createTag(ttt);    // Çàâåðøåíèå äåéñòâèé ñ ýëåìåíòîì li
        ul.appendChild(li);     // Äîáàâëåíèå ýëåìåíòà li â ñïèñîê ul
    }
}
//addList();

var tt = "Сделать задание #3 по web-программированию";
write(tt);


var inpt = document.createElement("input");
var buttn = document.createElement("button");
inpt.id = "add_task_input";
buttn.id = "add_task";

function addInpt() {
    write(inpt.value); 
}

buttn.onclick = addInpt;        // Ïðè íàæàòèè íà êíîïêó äîáàâëÿåòñÿ íîâûé il

r.appendChild(inpt);
r.appendChild(buttn);
