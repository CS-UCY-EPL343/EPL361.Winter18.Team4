export class DanceClass {
  id: number;
  name: string;
  availDays: AvailableHours[];
}

class AvailableHours {
  day: string;
  hours: number[];
}
