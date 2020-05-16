export default class Samochod{
  constructor(public marka: string, public rocznik: number, private poprzedniWlasciciel: string) {}

  pobierzPoprzedniegoWlasciciela() {
    return this.poprzedniWlasciciel;
  }
}