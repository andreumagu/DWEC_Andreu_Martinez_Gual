function anadirLi(){
    var li = document.createElement("li");
    var num = document.createTextNode(Math.random())
    li.appendChild(num);
    document.getElementById("lista").appendChild(li);
}
