var r = document.getElementsById("root");
var ul = document.createElement("ul");

function addList(){
    r.appenChild(ul) // Ïðèêðåïëÿåì ê êîðíþ ñîçäàííûé ñïèñîê
}

function deleteText(){  // Óäàëåíèå ýëåìåíòà li
    ul.removeChild(li);
}

function createTag() {
    var li = document.createElement("li");
    var span = document.createElement("span");
    var del = document.createElement("button");
    span.textContent = t;
    del.textContent = "Óäàëèòü";    
    del.onclick = deleteText();     // Ïðè íàæàòèè íà êíîïêó ýëåìåíò li óäàëÿåòñÿ
    li.appendChild(span);
    li.appendChild(del);
}

function write(t) {
    createTag();    // Çàâåðøåíèå äåéñòâèé ñ ýëåìåíòîì li
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
