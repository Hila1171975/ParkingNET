import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Rent } from 'src/classes/Rent';
import { FindParkingService } from '../Services/find-parking.service';
import { Address } from 'ngx-google-places-autocomplete/objects/address';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  newRent = new Rent();
  TodayDate = new Date();
  TodayEndDate = new Date();
  myLocation: String = "";
  submited = false;
  lat: number = 22;
  lan: number = 34;

  constructor(public FindParkingService: FindParkingService, public router: Router) {
    this.newRent.EntryDate = this.TodayDate;
    this.newRent.EntryHour = this.TodayDate;
    this.newRent.LeavingDate = this.TodayDate;
    this.newRent.LeavingHour = this.TodayDate;
    this.newRent.LeavingHour?.setHours(0, 0, 0)
  }

  public handleAddressChange(address: Address) {
    this.lat = address.geometry.location.lat()
    debugger;
    this.lan = address.geometry.location.lng()

  }
  ngOnInit(): void {

    console.log(this.TodayDate.getDate);

    //  alert(this.TodayDate.getDate)
  }



  FindParking() {
    debugger
    //  if (this.myLocation != "") {
    alert("ok" + this.myLocation)
    this.FindParkingService.Search3Parkings(this.lat, this.lan, this.newRent).subscribe(data => {
      if (this.FindParkingService.closestParking = data)
        if (this.FindParkingService.closestParking.length == 0)
          alert("לא נמצאו חניות")
        else {
          this.router.navigate(['/nav/myMap'])

        }
    }, err => { console.log("err") }
    );
    // }
    // else {

    //   this.submited = true;
    // }
  }
}
