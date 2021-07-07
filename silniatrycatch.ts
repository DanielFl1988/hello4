let lJeden: number = 1;
let przelicznik: number = 5;//z tej liczby silnia
 try{
     if (przelicznik <0){
         throw "liczba mniejsza od zera";
     }
     if (przelicznik === 0){
         throw "silnia równa zero"
     }
     if (przelicznik >0){
        while (przelicznik > 1) {
            lJeden *= przelicznik;
            przelicznik = przelicznik-1;
        }
        console.log(`silnia wynosi`, lJeden);
     }
 }
 catch (e){
     console.log(e);
 }