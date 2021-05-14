// function reverse(odwroconyciagZnakow: string): string {
//     return odwroconyciagZnakow.split("").reverse().join("");
// }

// let ciagZnakow: string = "potop";

// console.log("Twoje znaki to: " + `${ciagZnakow}`);

// var iloscZnakow: number = ciagZnakow.length;

// if (iloscZnakow < 2 || ciagZnakow.length === 0) {
//     console.log("Za krótkie słowo");
// } else {
//     if (ciagZnakow == reverse(ciagZnakow)) {
//         console.log("To jest palindrom");
//     }
//     if (ciagZnakow != reverse(ciagZnakow)) {
//         console.log("To nie jest palindrom");
//     }
// }

let ciagZnakow: string = "potop";
let tmp: string = ""; 
for (let i = ciagZnakow.length - 1; i >= 0; i-=2) {
    tmp += ciagZnakow[i];
}
console.log(tmp === ciagZnakow ? "To jest palindrom" : "To nie jest palindrom");