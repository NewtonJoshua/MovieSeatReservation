import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  private showDevView = false;
  constructor() { }

  ngOnInit() {
  }

  toggleView() {
    this.showDevView = !this.showDevView;
  }

}
