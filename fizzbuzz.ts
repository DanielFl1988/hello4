//let liczba: number = ``;
//let tmp: number = 0;
//var liczba: number[];

   // let wynikDzielenia = new integer
//for ( let i = liczba[0]; i <= liczba[100] - 1; i+=1)
    //console.log(liczba[i]);
    //tmp += liczba[i];

    let liczba: number = 1;
    //let fizz: number = ;
   // let buzz: number = ;
   // let fizzbuzz: number = ;
    while (liczba<=100){
        console.log(liczba);
        if (liczba/3 === Math.round(liczba/3) && liczba/5 != Math.round(liczba/5)) {
            console.log(liczba , `Fizz`);
        }
        if (liczba/5 === Math.round(liczba/5) && liczba/3 != Math.round(liczba/3)) {
            console.log(liczba ,`Buzz`);
        }
        if (liczba/3 ===Math.round(liczba/3) && liczba/5 === Math.round(liczba/5)) {
            console.log(liczba , `FizzBuzz`);
        }
        liczba++;
    }

