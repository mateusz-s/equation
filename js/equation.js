var a = prompt('Podaj wartość zmiennej a:'),
    b = prompt('Podaj wartość zmiennej b:'),
    value;

value = (a * a) + (2 * a * b) - (b * b);

if (value > 0) {
    alert('Wynik działania: (a * a) + (2 * a * b) - (b * b) wynosi ' + value + ' - Wynik dodatni.');
    console.log('Wynik działania: (a * a) + (2 * a * b) - (b * b) wynosi ' + value + ' - Wynik dodatni.');
} else if (value < 0) {
    alert('Wynik działania: (a * a) + (2 * a * b) - (b * b) wynosi ' + value + ' - Wynik ujemny.');
    console.log('Wynik działania: (a * a) + (2 * a * b) - (b * b) wynosi ' + value + ' - Wynik ujemny.');
} else {
    alert('Wynik działania: (a * a) + (2 * a * b) - (b * b) wynosi ' + value + ' - Wynik jest równy zero.');
    console.log('Wynik działania: (a * a) + (2 * a * b) - (b * b) wynosi ' + value + ' - Wynik jest równy zero.');
}