interface Radar {
    ciagZnakow: string
}
const radar: Radar = {
    ciagZnakow: 'radar'
}

interface Validator{
    isValid(radar: Radar): boolean;
}

class CiagZnakowValidator implements Validator {
    
    constructor(private minLength: number) {
        
    }
    isValid({ciagZnakow}: Radar): boolean {
        return ciagZnakow != null && ciagZnakow.length > this.minLength;
    }
}

function getZnaki(radar: Radar): string{
    return `${radar.ciagZnakow}`;
}
function wyswietlanieCiaguZnakow(radar: Radar){
    const znaki = getZnaki(radar);
    console.log("twoj ciąg znaków to:" + znaki);
    const validators = [new CiagZnakowValidator(3)];

    const isValid = validators.every(validator => validator.isValid(radar));
    if (!isValid) {
        return;
    }

    if (radar.ciagZnakow == null) {
        console.log('Nie wpisano słowa');
        return;
    }
}
