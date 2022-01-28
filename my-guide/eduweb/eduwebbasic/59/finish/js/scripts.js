var form = document.querySelector("#myForm");

console.log( form.firstName.value );
console.log( form.lastName.value );

form.lastName.value = "Kowalski";

form.message.value = "Treść";

console.log(form.subject.value);

form.subject.length = 2;

console.log( form.remember.checked );

console.log(form.querySelector("input[type='submit']").value);