import { Component, OnInit } from '@angular/core';
import { ReservationDataService } from '../services/reservation-data.service';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';


@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css'],
  providers: [ReservationDataService]
})
export class ReservationComponent implements OnInit {

  private selectedSeats = [];
  private seats: FirebaseListObservable<any>;
  private seatsAarray = [];

  constructor(private reservationDataService: ReservationDataService, private db: AngularFireDatabase) { }

  ngOnInit() {
    this.seats = this.db.list('/seats');
    this.seats.subscribe(seats => {
      this.seatsAarray = seats;
    });
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
    this.seats.update(seat.$key, seat);
  }

  save() {
    this.selectedSeats.forEach(selectedSeat => {
      selectedSeat.available = false;
      selectedSeat.selected = false;
      this.seats.update(selectedSeat.$key, selectedSeat);
    });
    this.selectedSeats = [];
  }

  reset() {
    this.seatsAarray.forEach(seat => {
      seat.available = true;
      seat.selected = false;
      this.seats.update(seat.$key, seat);
    });
    this.selectedSeats = [];
  }

}
