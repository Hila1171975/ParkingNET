import { Component, OnInit } from '@angular/core';
import { EventSettingsModel } from '@syncfusion/ej2-angular-schedule';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css'],
})
export class CalenderComponent implements OnInit {

  constructor() { }

  public eventSettings: EventSettingsModel = {
    dataSource: [
      {
        Id: 1,
        Subject: 'Explosion of Betelgeuse Star',
        StartTime: new Date(2022, 2, 2, 9, 7, 30),
        EndTime: new Date(2022, 2, 2, 10, 7, 30)
      },]
  };

  ngOnInit(): void {
  }

}
