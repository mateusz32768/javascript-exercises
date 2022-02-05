var source = document.getElementById("entry-template").innerHTML;
var template = Handlebars.compile(source);

var context = {
  title: "My New Post",
  body: "This is my first post!",
  firstName: 'Marek',
  lastName: 'Kaczmarek'
};

Handlebars.registerHelper('loud', function (str) {
  return str.toUpperCase();
});

var html = template(context);

var targetElement = document.querySelector('.container');
targetElement.insertAdjacentHTML('beforeend', html);