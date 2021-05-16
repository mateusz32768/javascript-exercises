var firstName = "Maciej";

if (true) {
  var age = 32;
}

function sayHello(text) {

  var lastName = "Kowalski";

  console.log("Cześć, " + firstName + " " + lastName + " masz " + age + " lat");

}

// Funkcja tworzy nowy zakres zmiennych
// Zakres bloku kodu przy użyciu słowa kluczowego var nie istnieje 
// zmienna age jest widoczna poza blokiem kodu

sayHello();