export class InputStartDate {
  public year: number; 
  public month: number; 
  public day: number | undefined;
  
  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }
}