const variable = 22; // Deklaracja globalna zmiennej variable

if (variable % 2 === 0){
  let variable = true;
  console.log(variable);
} else {
  let variable = false;
  console.log(variable);
}

// let variable = "Nie uważasz, że składnia JS jest dziwna ?"; => SyntaxError: Identifier 'variable' has already been declared
