import { Component, OnInit } from '@angular/core';
import { FindParkingService } from '../Services/find-parking.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor(public FindParkingService: FindParkingService) { }

  ngOnInit(): void {
  }

}
