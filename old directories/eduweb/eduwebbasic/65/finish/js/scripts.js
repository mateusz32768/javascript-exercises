var btn = document.querySelector("#btn");

btn.onclick = function(e) {

    console.log(this);

    console.log(e.target);

    e.target.setAttribute("disabled", true);

};

document.body.onclick = function(e) {

    console.log(this);
    console.log(e.target);

};