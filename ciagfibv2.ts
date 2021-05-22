let liczbaDo: number = 3;//tutaj wpisujesz od której liczby w ciągu ma wystartować
let liczbaLiczb: number = 4// tutaj wpisujesz ile kolejnych liczb z ciągu ma się wyswietlić
// pamietaj że maszyna liczy od zera więc 4 oznacza 5!!!
let liczba0: number = 0;
let liczba1: number = 1;

var Liczby = [];
if (liczbaDo < 0) {
    console.log(`wpisz liczbę większą bądź równą zero`);
}
//if (liczbaDo === 0) {
//   console.log(liczbaDo);
//}
//if (liczbaDo === 1) {
//  console.log(0);
// console.log(1);
//}
if (liczbaDo >= 0) {
    //   console.log(liczba0);
    //  console.log(liczba1);
    //}

    for (let i = 0; i <= liczbaDo - 1; i += 1) {

        let liczba2 = liczba0 + liczba1;
        //console.log(liczba2);
        liczba0 = liczba1;
        liczba1 = liczba2;
        Liczby.push(liczba2);

    }
    //console.log(Liczby);
    //let liczbaOd = Liczby.lastIndexOf(liczbaDo);
    //console.log(liczbaOd);
    if (liczbaDo === 0) {
        console.log(0);
        console.log(1);
       var pierwszaWartosc = 1;
       var drugaWartosc = 0
       liczbaLiczb-=1;
    }
    if (liczbaDo === 1) {
        
        console.log(1);
       var pierwszaWartosc = 1;
       var drugaWartosc = 0
       //liczbaLiczb-=1;
    }
else {


var pierwszaWartosc: number = Liczby.pop();
console.log(pierwszaWartosc);
var drugaWartosc: number = Liczby.pop();
}

for (let i = 1; i <= liczbaLiczb; i += 1) {
    let trzeciaWartosc = pierwszaWartosc + drugaWartosc;
    console.log(trzeciaWartosc);
    drugaWartosc = pierwszaWartosc;
    pierwszaWartosc = trzeciaWartosc;
}
}