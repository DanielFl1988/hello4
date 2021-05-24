let liczbaStartowa: number = 4;// tutaj wpisujesz ile chcesz liczba z ciągu
let liczba1x: number = 1;
let liczba2x: number = 0;
let liczba3: number;
if (liczbaStartowa === 0){
    console.log(`zero`);
}
//if (liczbaStartowa === 1){
 //   console.log(`0`);
//    console.log(`1`);
//}
if (liczbaStartowa >=1 ){
    console.log(liczba2x);
  //  console.log(`1`);

    while (liczbaStartowa >=2 ){
        liczba3 = liczba1 + liczba2x;
        console.log(liczba3);
        liczba1 = liczba2x;
        liczba2x = liczba3;
        liczbaStartowa-=1;
    }

}