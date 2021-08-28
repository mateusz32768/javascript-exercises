<?php // quote.php

// Określ typ zawartości:
header('Content-Type: application/json');

// Ustaw adres dla cURL:
$curl = curl_init('http://www.google.com/finance/info?infotype=infoquoteall&q=AAPL');

// Wynik powinien zostać przypisany do zmiennej:
curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
$result = curl_exec($curl);

// Zamknij cURL:
curl_close($curl);

// Pomiń trzy pierwsze znaki:
print substr($result,3);
?>