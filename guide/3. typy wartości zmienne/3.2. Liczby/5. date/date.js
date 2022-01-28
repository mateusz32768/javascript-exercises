let timestamp = Date.now(); // Aktualny czas jako znacznik (liczba).
let now = new Date(); // Aktualny czas jako obiekt typu Date.
let ms = now.getTime(); // Przekształcenie daty w znacznik czasu.
let iso = now.toISOString(); // Przekształcenie daty w ciąg znaków w standardowym formacie.


console.log(timestamp);
console.log(now);
console.log(ms);
console.log(iso);

console.log(now.getDate());
console.log(now.getMonth());
console.log(now.getFullYear());

if(now.getDay() === 4){
  console.log('Czwartek');
}
