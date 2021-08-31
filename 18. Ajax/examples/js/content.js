// content.js

// Ustaw podstawową funkcjonalność po wczytaniu strony:
window.onload = function() {
    'use strict';

	// Do zarządzania widokami:
	var pages = ['model', 'view', 'controller'];
	var counter = 0;

	// Pobierz następne dane:
	var ajax = getXMLHttpRequestObject();
	ajax.open('GET', 'zasoby/content.php?id=' + pages[counter], false);
	ajax.send(null);
	
	// Pobierz dane:
	var title = ajax.responseXML.getElementsByTagName('title')[0].firstChild.nodeValue;
	var content = ajax.responseXML.getElementsByTagName('content')[0].firstChild.nodeValue;
	
	// Obsługa kliknięcia:
	var nextLink = document.getElementById('nextLink');
	nextLink.onclick = function() {
	
		// Aktualizacja treści:
		document.getElementById('title').innerHTML = title;
		document.getElementById('content').innerHTML = content;
		
		// Zwiększ licznik:
counter++;

if (counter == 3) { // Wszystko gotowe!
	nextLink.parentNode.removeChild(nextLink);
	ajax = null;
} else { // Pobierz następną treść:
	ajax.open('GET', 'zasoby/content.php?id=' + pages[counter], false);
	ajax.send(null);
	title = ajax.responseXML.getElementsByTagName('title')[0].firstChild.nodeValue;
	content = ajax.responseXML.getElementsByTagName('content')[0].firstChild.nodeValue;
}		
		
		// Zwróć false, aby zablokować akcję domyślną:
		return false;
			
	}; // Koniec funkcji anonimowej dla onclick.
		
}; // Koniec funkcji anonimowej dla onload.