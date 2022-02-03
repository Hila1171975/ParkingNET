import { Component, OnInit } from '@angular/core';
import { Parking } from 'src/classes/Parking';
import { ParkingService } from '../Services/parking.service';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-parking-list',
  templateUrl: './parking-list.component.html',
  styleUrls: ['./parking-list.component.css']
})
export class ParkingListComponent implements OnInit {
lParking:Array<Parking>=new Array<Parking>()
lUserParking:Array<Parking>=new Array<Parking>()

  constructor(public ParkingService:ParkingService, public UserService:UserService) { }

  ngOnInit(): void {
    this.ParkingService.GetParkingList().
    subscribe(data=>{this.lParking=data
      this.lUserParking = data.filter(x=>x.UserId==this.UserService.userId)
    }, err=>{alert("שגיאה ב parking-list")})

  }

}
