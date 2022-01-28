var list1 = document.querySelector("#list1"),
    list2 = document.querySelector("#list2");

var li = document.createElement("li"),
    text = document.createTextNode("Treść");

li.appendChild(text);

// list1.appendChild(li);
// list1.insertBefore(li, list1.querySelector("li:nth-child(2)"));
// list1.appendChild(list1.querySelector("li:first-child"));
// list2.removeChild(list2.querySelector(":last-child"));
list1.replaceChild(li, list1.querySelector(":last-child"));