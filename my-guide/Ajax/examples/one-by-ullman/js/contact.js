// contact.js
// Skrypt wykonuje żądanie Ajax dla formularza kontaktowego.

// Funkcja obsługująca odpowiedź Ajax.
function handleAjaxResponse(e) {
    'use strict';

    // Pobierz obiekt zdarzenia:
	if (typeof e == 'undefined') var e = window.event;

	// Pobierz źródło zdarzenia:
	var ajax = e.target || e.srcElement;

// Sprawdź właściwość readyState:
if (ajax.readyState == 4) {
	
	// Sprawdź kod statusu:
    if ( (ajax.status >= 200 && ajax.status < 300) 
    || (ajax.status == 304) ) {
	
		// Uaktualnij stronę:
		document.getElementById('contactForm').innerHTML = ajax.responseText;
			
	    } else { // Błędny status!
			document.getElementById('theForm').submit();
	    }
	
		ajax = null;
				
	} // Koniec warunku IF.
	
} // Koniec funkcji handleAjaxResponse().

// Ustaw podstawową funkcjonalność po wczytaniu strony:
window.onload = function() {
    'use strict';

	// Utwórz obiekt Ajax:
	var ajax = getXMLHttpRequestObject();
	
	// Funkcja wywoływana w przypadku zmian właściwości readyState:
	ajax.onreadystatechange = handleAjaxResponse;

    // Dodaj procedurę obsługi wysyłki formularza:
    document.getElementById('theForm').onsubmit = function() {
	
		// Utwórz dane:
		var fields = ['name', 'email', 'comments'];
		var data = []; // Pusta tablica.
		for (var i = 0, count = fields.length; i < count; i++) {
			data.push(encodeURIComponent(fields[i]) + '=' + encodeURIComponent(document.getElementById(fields[i]).value));
		}
		
		// Rozpocznij żądanie:
		ajax.open('POST', 'zasoby/contact.php', true);
		ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

		// Wyślij żądanie:
		ajax.send(data.join('&'));
		
		return false;
		
	}; // Koniec funkcji onsubmit.
    
}; // Koniec funkcji onload.