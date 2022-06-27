let list = document.getElementById("ft_list");
let array = [];
let arrayCookies = [];

let retCookies = document.cookie;
let splitCookies = document.cookie.split(";");
console.log("Cookies list : " + retCookies);
console.log("Cookies split : " + splitCookies[0]);
if (splitCookies[0][0] === '[') {
    arrayCookies = JSON.parse(splitCookies[0]);
    for (let i in arrayCookies) {
        addToDo(arrayCookies[i]);
    }
}

function storeCookies(array) {
    let jsonStr = "";
    
    console.log(array);
    jsonStr = JSON.stringify(array);
    let expire_date = (new Date(Date.now()+ 2 * 24 * 60 * 60 * 1000)).toUTCString();
    document.cookie = jsonStr + ";expires=" + expire_date + "; SameSite=None; Secure; ";
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