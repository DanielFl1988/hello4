let ciagZnakow: string = 'potop';
let odwroconyciagZnakow: string = 'potop';

console.log('Podaj ciąg znaków');

    console.log('Twoje znaki to: ' + `${ciagZnakow}`);
    
    if (ciagZnakow == null) {
        console.log('Nie wpisano słowa');
        
    }
    function reverse(odwroconyciagZnakow:string): string {
        return ciagZnakow.split('').reverse().join('');
      }
    if (ciagZnakow == odwroconyciagZnakow) {
        console.log('To jest palindrom');
        
    }
    if (ciagZnakow != odwroconyciagZnakow) {
        console.log('To nie jest palindrom');
        
    }
