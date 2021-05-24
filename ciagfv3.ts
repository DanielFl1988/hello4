let liczbaStartowa: number = 0;
let liczba1: number = 1;
let liczba2: number = 0;
let liczba3: number;
if (liczbaStartowa === 0){
    console.log(`zero`);
}
//if (liczbaStartowa === 1){
 //   console.log(`0`);
//    console.log(`1`);
//}
if (liczbaStartowa >=1 ){
    console.log(liczba2);
  //  console.log(`1`);

    while (liczbaStartowa >=2 ){
        liczba3 = liczba1 + liczba2;
        console.log(liczba3);
        liczba1 = liczba2;
        liczba2 = liczba3;
        liczbaStartowa-=1;
    }
}