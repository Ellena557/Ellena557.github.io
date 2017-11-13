var r = document.getElementById("root");
var ul = document.createElement("ul");
var li = document.createElement("li");
vat ttt;

function addList(){
    r.appenChild(ul) // Ïðèêðåïëÿåì ê êîðíþ ñîçäàííûé ñïèñîê
}

function deleteText(){  // Óäàëåíèå ýëåìåíòà li
    ul.removeChild(li);
}

function createTag(ttt) {
    var span = document.createElement("span");
    var del = document.createElement("button");
    span.textContent = ttt;
    del.textContent = "Óäàëèòü";    
    del.onclick = deleteText();     // Ïðè íàæàòèè íà êíîïêó ýëåìåíò li óäàëÿåòñÿ
    li.appendChild(span);
    li.appendChild(del);
    deleteText();
}

function write(ttt) {
    createTag(ttt);    // Çàâåðøåíèå äåéñòâèé ñ ýëåìåíòîì li
    ul.appendChild(li);     // Äîáàâëåíèå ýëåìåíòà li â ñïèñîê ul
}

var tt = "Ñäåëàòü çàäàíèå #3 ïî web-ïðîãðàììèðîâàíèþ";
write(tt);


var inpt = document.createElement("input");
var buttn = document.createElement("button");
r.appendChild(inpt);
r.appendChild(buttn);
inpt.id = "add_task_input";
buttn.id = "add_task";

function addInpt() {
    write(inpt.value); 
}

buttn.onclick = addInpt;        // Ïðè íàæàòèè íà êíîïêó äîáàâëÿåòñÿ íîâûé il
