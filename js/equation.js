var a = prompt('Podaj wartość zmiennej a:'),
  b = prompt('Podaj wartość zmiennej b:'),
  value,
  info,
  sign;
value = (a * a) + (2 * a * b) - (b * b);

if (value > 0) {
  sign = "dodatni";
} else if (value < 0) {
  sign = "ujemny";
} else {
  sign = "jest równy zero";
}

info = 'Wynik działania: (a * a) + (2 * a * b) - (b * b) wynosi ' + value + ' - Wynik ' + sign;
console.log(info);
alert(info);
