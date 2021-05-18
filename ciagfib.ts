let liczbaDo: number = 12;
let liczba0: number = 0;
let liczba1: number = 1;

if (liczbaDo<0){
    console.log(`wpisz liczbę większą bądź równą zero`);
}
if (liczbaDo === 0 ){
    console.log(liczbaDo);
}
if (liczbaDo === 1){
    console.log(0);
    console.log(1);
}
if (liczbaDo>=2){
    console.log(liczba0);
    console.log(liczba1);
}
    for (let i = 1; i <= liczbaDo-1; i+=1) {
            
            let liczba2 = liczba0+liczba1;
            console.log(liczba2);
            liczba0=liczba1;
            liczba1=liczba2;
        }

   

