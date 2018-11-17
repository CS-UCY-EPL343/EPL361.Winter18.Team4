export class DanceClass {
  day: string;
  availDays: AvailableHours[];
}

class AvailableHours {
  className: string;
  hours: number[];
}
