var r = document.getElementsById("root");
var ul = document.createElement("ul");

function addList(){
    r.appenChild(ul) // ����������� � ����� ��������� ������
}

function deleteText(){  // �������� �������� li
    ul.removeChild(li);
}

function createTag() {
    var li = document.createElement("li");
    var span = document.createElement("span");
    var del = document.createElement("button");
    span.textContent = t;
    del.textContent = "�������";    
    del.onclick = deleteText();     // ��� ������� �� ������ ������� li ���������
    li.appendChild(span);
    li.appendChild(del);
}

function write(t) {
    createTag();    // ���������� �������� � ��������� li
    ul.appendChild(li);     // ���������� �������� li � ������ ul
}

var tt = "������� ������� #3 �� web-����������������";
write(tt);


var inpt = document.createElement("input");
var buttn = document.createElement("button");
inpt.id = "add_task_input";
buttn.id = "add_task";

function addInpt() {
    write(inpt.value); 
}

buttn.onclick = addInpt;        // ��� ������� �� ������ ����������� ����� il