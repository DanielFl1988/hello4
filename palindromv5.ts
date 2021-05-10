let ciagZnakow: string = 'potop';


console.log('Podaj ciąg znaków');

    console.log('Twoje znaki to: ' + `${ciagZnakow}`);
    
    
    var iloscZnakow = ciagZnakow.length;
        
        
    

    if (iloscZnakow <= 2) {
        console.log('Za krótkie słowo');
        
    }
    else {
    function reverse(odwroconyciagZnakow): string {
        return odwroconyciagZnakow.split('').reverse().join('');
        
    }

    if (ciagZnakow == reverse(ciagZnakow)) {
        console.log('To jest palindrom');
        
    }
    if (ciagZnakow != reverse(ciagZnakow)) {
        console.log('To nie jest palindrom');
    
    }
    }