import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  private seats = [];
  private bookedSeats = [1, 22, 47];
  private selectedSeats = [];

  constructor() { }

  ngOnInit() {
    const seatRows = ['A', 'B', 'C', 'D'];
    for (let i = 0; i < 48; i++) {
      const seatName = seatRows[i % 4] + Math.floor(i / 4 + 1);
      const seatData = {
        id: i,
        available: true,
        selected: false,
        seatName: seatName
      };
      this.bookedSeats.forEach(seat => {
        if (seat === i) {
          seatData.available = false;
        }
      });
      this.seats.push(seatData);
    }
  }

  selectSeat(seat) {
    if (seat.selected) {
      this.selectedSeats = this.selectedSeats.filter(value => {
        return !(value.id === seat.id);
      });
    } else {
      this.selectedSeats.push(seat);
    }
    seat.selected = !seat.selected;
  }

}
