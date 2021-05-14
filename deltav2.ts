let wspolczynniki: number[];
wspolczynniki = [1,4,1];
console.log(`współczynniki a b i c to kolejno: `,wspolczynniki[0], wspolczynniki [1] ,wspolczynniki [2]);
if (wspolczynniki[0] === 0) {
    console.log(`To nie jest funkcja kwadratowa`)
}
else {
const delta: number = (wspolczynniki[1]*wspolczynniki[1]-4*wspolczynniki[0]*wspolczynniki[2]);
if (delta < 0) {
    console.log(` brak miejsc zerowych`);
}
if (delta === 0) {
    var x0: number = (-wspolczynniki[1]/2*wspolczynniki[0]);
    console.log(`jedno miejsce zerowe`, Math.round(x0));
}
if (delta > 0) {
    var x1: number = (-wspolczynniki[1]-Math.sqrt(delta)/2*wspolczynniki[0]);
    var x2: number = (-wspolczynniki[1]+Math.sqrt(delta)/2*wspolczynniki[0]);
    console.log(` miejsca zerowe to:`, Math.round(x1), Math.round(x2));
}
}
