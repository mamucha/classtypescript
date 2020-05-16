import Student from './student';
import Doktorant from './doktorant';

const student = new Student('Mateusz', 1988, 10, 5);

console.log(student.toString());
console.log(`Wiek: ${student.wiek}`);
console.log(`Imie: ${student.imie}`);
//console.log(student.rok);
// console.log(`Imie: ${student.miesiac}`);

const doktorant = new Doktorant('mgr Marcin', 1980, 10, 27, 2012);

console.log(doktorant.toString());
// console.log(`Wiek: ${doktorant.wiek}`);
// console.log(`Rok rozpoczęcia studiów doktoranckich: ${doktorant.rokRozpoczeciaStudiowDr}`);


/* Jako ćwiczenie proszę utworzyć klasę Samochód która przyjmuje jako parametry Markę, rocznik oraz poprzedni właściciel. Marka i rocznik mają być właściwościami publicznymi, natomiast poprzedni właściciel ma być właściwością prywatną.
Dodatkowo klasa ma posiadać metodę zwracającą poprzedniego właściciela.
W ramach sprawdzenia czy nasz kod działa utowrzyć instację i wypisać do konsoli poprzedniego właściciela */