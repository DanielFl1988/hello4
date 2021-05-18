let liczba: number = 2;

let silnia: number = 1;
let liczba2: number = 5;//tutaj wpisuje z jakiej liczby chce silnie

if (liczba === 0 || liczba === 1){
    console.log(`1`);
}

if (liczba >= 2)
    //for (let i =1; i <= liczba-1; i+=1){
     while (liczba2 >1){
        silnia *= liczba2
       liczba2 = liczba2-1;
       
     } 
   
    
    //}
    console.log(silnia);
