export default class Student {
  dzien: number;

  constructor(public imie: string, private rok: number, protected miesiac: number, dzien: number) {
    this.dzien = dzien;
  }

  get wiek(): number {
    const obecnaData = new Date();

    return obecnaData.getFullYear() - this.rok;
  }

  toString(): string {
    return `${this.imie} - ${this.dzien}/${this.miesiac}/${this.rok}`;
  }
}