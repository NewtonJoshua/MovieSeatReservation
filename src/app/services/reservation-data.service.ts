import { Injectable } from '@angular/core';

@Injectable()
export class ReservationDataService {

  constructor() { }

  getMockData() {
    const seatRows = ['A', 'B', 'C', 'D'];
    const seats = [];
    for (let i = 0; i < 48; i++) {
      const seatName = seatRows[i % 4] + Math.floor(i / 4 + 1);
      const seatData = {
        id: i,
        available: true,
        selected: false,
        seatName: seatName
      };
      seats.push(seatData);
    }
    return seats;
  }

}
