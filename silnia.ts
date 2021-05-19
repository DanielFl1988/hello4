//let liczba: number = 2;
let silnia: number = 1;
let liczba2: number = -2;//tutaj wpisuje z jakiej liczby chce silnie
const liczba1: number = liczba2
//if (liczba === 0 || liczba === 1) {
//   console.log(`jeden`);
//}
//if (liczba >= 2)
//for (let i =1; i <= liczba-1; i+=1){
if (liczba2<0){
    console.log(`wpisz liczbę większą lub równą zero`);
}
else {
while (liczba2 > 1) {
    silnia *= liczba2
    liczba2 = liczba2 - 1;
}
console.log(`silnia z`, liczba1, `wynosi`, silnia);
}