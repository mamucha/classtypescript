import Student from './student';

export default class Doktorant extends Student {
  constructor(imie:string, rok:number, miesiac:number, dzien:number, private rokRozpoczeciaStudiowDr:number){
    super(imie, rok, miesiac, dzien);
    this.rok = 2020;
    this.miesiac = 12;
    this.rokRozpoczeciaStudiowDr = rokRozpoczeciaStudiowDr;
  }
}