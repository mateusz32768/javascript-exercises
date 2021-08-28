// quote.js
// Skrypt wykonuje żądanie Ajax i uaktualnia stronę WWW otrzymanym wynikiem.

// Ustaw podstawową funkcjonalność po wczytaniu strony:
window.onload = function() {
    'use strict';

	// Utwórz obiekt Ajax:
	var ajax = getXMLHttpRequestObject();
	
	// Funkcja wywoływana w przypadku zmian właściwości readyState:
	ajax.onreadystatechange = function() {

		// Sprawdź właściwość readyState:
		if (ajax.readyState == 4) {
			
			// Sprawdź kod statusu:
		    if ( (ajax.status >= 200 && ajax.status < 300) 
		    || (ajax.status == 304) ) {

				// Przetwórz odpowiedź:
				var data = JSON.parse(ajax.responseText);

				// Uaktualnij stronę:
				var output = document.getElementById('quote');
				if (output.textContent !== undefined) {
				    output.textContent = data[0].l;
				} else {
				    output.innerText = data[0].l;
				}
			
		    } // Koniec warunku IF.
				
		} // Koniec warunku IF dla readyState.

	}; // Koniec funkcji onreadystatechange.
	
	// Pobierz początkowe dane:
	ajax.open('GET', 'zasoby/quote.php', true);
	ajax.send(null);
	
	// Użyj interwału czasowego, by okresowo pobierać dane ponownie:
	var stockTimer = setInterval(function() {
	
	    ajax.open('GET', 'zasoby/quote.php', true);
		ajax.send(null);
	
	}, 60000);
		
    
}; // Koniec funkcji anonimowej dla onload.