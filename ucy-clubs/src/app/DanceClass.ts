export class DanceClass {
  name: string;
  availDays: AvailableHours[];
}

class AvailableHours {
  day: string;
  hours: number[];
}
