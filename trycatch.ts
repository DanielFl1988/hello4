let dzielna: number = 1;
let dzielnik: number = 0;

try {
    //throw new Error("Pamiętaj cholero nie dziel przez zero");
    //let wynikDzielenia: number = dzielna/dzielnik;
    if (dzielnik != 0) {
        let wynikDzielenia: number = dzielna/dzielnik;
        console.log(wynikDzielenia);
        }
    if (dzielnik === 0) {
        throw "pamiętaj cholero nie dzielimy przez zero";
        }
    }
catch(e) {
    console.log(e);  
    }
