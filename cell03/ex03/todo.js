let list = document.getElementById("ft_list");
let array = [];
let arrayCookies = [];

var cookies = document.cookie;
console.log("Cookies list : " + cookies);
if (cookies.length > 0) {
    arrayCookies = JSON.parse(cookies);
    for (var i in arrayCookies) {
        addToDo(arrayCookies[i]);
    }
}

function storeCookies(array) {
    let jsonStr = "";
    
    jsonStr = JSON.stringify(array);
    document.cookie = jsonStr + "; SameSite=None; Secure; ";
}

function addToDo(toDo) {
    let newTd = document.createElement("div");
    newTd.setAttribute("class", "toDo");
    
    newTd.innerHTML = toDo;
    list.insertBefore(newTd, list.firstElementChild);
    array.push(toDo);
}

function newToDo() {
    let toDo = prompt("Enter a new toDo", "example");
    if (toDo != null) {
        addToDo(toDo);
    }
    storeCookies(array);
}

list.addEventListener("click", function(event) {
    if (confirm("Are you sure you want delete this ToDO ?") == true) {
        if (event.target.className === "toDo") {
            array.splice(array.indexOf(event.target.innerText), 1);
            list.removeChild(event.target);
            storeCookies(array);
        }
    }
});