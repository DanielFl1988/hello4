let liczbaStartowax: number = 5;// tutaj wpisujesz od której liczby ciągu zaczynasz
let liczba1x2: number = 1;
let liczba2x2: number = 0;
let liczba3x: number;
let Liczbyx = [];
let liczbaElementow = 4;//tutaj wpisujesz ile nastęnych liczb chcesz

const wartosc1: number = 1;
const wartosc0: number = 0;
const wartosc2: number = 2;
if (liczbaStartowax === 0 || liczbaElementow === 0) {
    console.log(`zero`);
}
if (liczbaElementow === 1 && liczbaStartowax === 1) {
    Liczbyx.push(wartosc0);
    //console.log(Liczbyx);
}
if (liczbaElementow === 1 && liczbaStartowax === 2) {
    Liczbyx.push(wartosc1);
}
if (liczbaElementow === 2 && liczbaStartowax === 1) {
    Liczbyx.push(wartosc0, wartosc1);
}
if (liczbaElementow === 2 && liczbaStartowax === 2) {
    Liczbyx.push(wartosc1, wartosc2);
}
if (liczbaStartowax === 1 && liczbaElementow > 2) {
    for (let i = 0; i <= liczbaElementow + liczbaStartowax - 4; i++) {

        liczba3x = liczba2x2 + liczba1x2;
        Liczbyx.push(liczba3x);
        liczba2x2 = liczba1x2;
        liczba1x2 = liczba3x;
    }
    Liczbyx.unshift(wartosc1);
    Liczbyx.unshift(wartosc0);
}

if (liczbaElementow >= 1 && liczbaStartowax >= 2) {
    for (let i = 0; i <= liczbaElementow + liczbaStartowax - 4; i++) {

        liczba3x = liczba2x2 + liczba1x2;
        Liczbyx.push(liczba3x);
        liczba2x2 = liczba1x2;
        liczba1x2 = liczba3x;

    }

    Liczbyx.unshift(wartosc1);
    Liczbyx.unshift(wartosc0);
    Liczbyx.splice(0, liczbaStartowax - 1);
}
//console.log(Liczbyx);

console.log(Liczbyx);