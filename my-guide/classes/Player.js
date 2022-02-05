/*
 *   pole dla którego stworzony jest getter i/lub setter ma nazwę rozpoczynającą się od znaku podkreślenia.
 *   Jest to konwencja, która ma symulować pole prywatne, a dodatkowo rozwiązuje problem polegający na tym,
 *   że nazwa gettera i settera nie może być taka sama jak nazwa pola.
 *   W rzeczywistości jest to zwykłe pole publiczne, ponieważ w standardzie ECMAScript nie występują jeszcze pola
 *   prywatne. Jeżeli ktoś bardzo chce, to i tak może ustawić wartość _points na nieprawidłową, odwołując się do
 *   niego bezpośrednio player1._points.
 * */

class Player {
  constructor(nickname, points) {
    this.nickname = nickname;
    this._points = points;
  }

  get points() {
    return `${this._points} points`;
  }

  set points(value) {
    if (value >= 0) {
      this._points = value;
    } else {
      console.log('Liczba punktow musi być nieujemna');
    }
  }

  get info() {
    return `${this.nickname} : ${this.points}`;
  }
}

let player1 = new Player('John', 22);
console.log(player1.info); //John : 22 points

player1.points = 34;
console.log(player1.info);
