//let liczba: number = 2;
let silnia: number = 1;
let liczba2x: number = 8;//tutaj wpisuje z jakiej liczby chce silnie
const liczba1y: number = liczba2x;
//if (liczba === 0 || liczba === 1) {
//   console.log(`jeden`);
//}
//if (liczba >= 2)
//for (let i =1; i <= liczba-1; i+=1){
if (liczba2x < 0) {
    console.log(`wpisz liczbę większą lub równą zero`);
}
else {
    while (liczba2x > 1) {
        silnia *= liczba2x
        liczba2x = liczba2x - 1;
    }
    console.log(`silnia z`, liczba1y, `wynosi`, silnia);
}