import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css'],
  providers: [ToastService]
})
export class ReservationComponent implements OnInit {

  private selectedSeats = [];
  private seats: FirebaseListObservable<any>;
  private seatsAarray = [];

  constructor(private db: AngularFireDatabase, private toastService: ToastService) { }

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
    this.toastService.toast({
      type: 'success',
      title: 'Seat(s) reserved',
      msg: 'Hi, The selected seats are reserved for you.'
    });
  }

  reset() {
    this.seatsAarray.forEach(seat => {
      seat.available = true;
      seat.selected = false;
      this.seats.update(seat.$key, seat);
    });
    this.selectedSeats = [];
    this.toastService.toast({
      type: 'info',
      title: 'App reset',
      msg: 'Hi, The application is reset and all the seats are available now.'
    });
  }

}
