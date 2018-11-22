import {strict} from "assert";

export class DanceClass {
  name: string;
  availDays: AvailableHours[];

}

export class AvailableHours {
  day: string;
  hours: number;

  public toString = () :string=> {
    let result: string;
    result = this.day;
    result = result.concat(" at " , String((this.hours + 9)));
    result = result.concat(":00 - ",String((this.hours + 9)), ":59");
    return result;
  }
}
