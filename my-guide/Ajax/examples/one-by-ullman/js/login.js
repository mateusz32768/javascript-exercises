// login.js #2

// Funkcja wywoływana w momencie wysyłania formularza.
// Funkcja sprawdza dane formularza i zwraca wartość logiczną.
function validateForm() {
    'use strict';
    
    // Pobierz referencje do pól formularza:
    var email = document.getElementById('email');
    var password = document.getElementById('password');

    // Walidacja!
	if ( (email.value.length > 0) && (password.value.length > 0) ) {

	// Wykonaj żądanie Ajax:
	var ajax = getXMLHttpRequestObject();
ajax.onreadystatechange = function() {
if (ajax.readyState == 4) {

// Sprawdź kod statusu:
if ( (ajax.status >= 200 && ajax.status < 300) 
|| (ajax.status == 304) ) {

if (ajax.responseText == 'OK') {
alert('Jesteś zalogowany!');
} else {
alert('Przesłane wartości nie odpowiadają znajdującym się w pliku!');
}

} else {
document.getElementById('theForm').submit();
}
}

};
ajax.open('POST', 'zasoby/login.php', true);
ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
var data = 'email=' + encodeURIComponent(email.value) + '&password=' + encodeURIComponent(password.value);
ajax.send(data);	
	
        return false;

    } else {
        alert('Proszę uzupełnić formularz!');
        return false;
    }
    
} // Koniec funkcji validateForm().

// Funkcja wykonywana po zakończeniu wczytywania strony WWW.
// Funkcja dodaje procedurę obsługi zdarzenia do formularza.
function init() {
    'use strict';
    
    // Potwierdź, że można użyć document.getElementById():
    if (document && document.getElementById) {
        var loginForm = document.getElementById('loginForm');
        loginForm.onsubmit = validateForm;
    }

} // Koniec funkcji init().

// Przypisz procedurę obsługi zdarzenia do okna przeglądarki:
window.onload = init;