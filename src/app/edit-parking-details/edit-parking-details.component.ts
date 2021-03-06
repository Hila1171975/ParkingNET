import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Parking } from 'src/classes/Parking';
import { ParkingService } from '../Services/parking.service';
import { UserService } from '../Services/user.service';
// import { saveAs } from 'file-saver';
// import * as FileSaver from 'file-saver';
import { DomSanitizer } from '@angular/platform-browser';
import { Address } from 'ngx-google-places-autocomplete/objects/address';

@Component({
  selector: 'app-edit-parking-details',
  templateUrl: './edit-parking-details.component.html',
  styleUrls: ['./edit-parking-details.component.css']
})
export class EditParkingDetailsComponent implements OnInit {
  newParking: Parking = new Parking();
  b: Boolean = true;
  myTitle: String = ""
  bigImage:string = ""
  ch1: boolean = false
  ch2: boolean = false
  ch3: boolean = false
  ch4: boolean = false
  i: number = 0
  fileName = '';
  lat: number = 22;
  lan: number = 34;
  
  constructor(public ParkingService: ParkingService, public ActiveRoute: ActivatedRoute, public UserService: UserService, public sanitizer: DomSanitizer,public router: Router) { }

  public handleAddressChange(address: Address) {
    this.lat = address.geometry.location.lat()
    debugger;
    this.lat = address.geometry.location.lng()

  }

  onFileSelected(event: any) {
    let formData = new FormData();
    this.fileName = ""
    for (let index = 0; index < event.target.files.length && index < 3; index++) {
      let element = event.target.files[index];
      if (element) {
        this.fileName += element.name + ",";
        // + this.i++
        formData.append("myImage" + index, element);
      }
    }
    this.ParkingService.uploadImage(formData).subscribe(suc => {
      this.newParking.IMG1 = suc[0]
      this.newParking.IMG2 = suc[1]
      this.newParking.IMG3 = suc[2]
    }, err => { console.log })
  }

  photoURL(url: any) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  add() {
    this.newParking.SizeFor = this.sizeForStr()
    if (this.newParking.Id == undefined) {
      this.ParkingService.addParking(this.newParking).
        subscribe(data => { this.b = data }, err => { console.log(err) })
      if (this.b = true)
      {
        alert("?????????? ?????????? ????????????")
        this.router.navigate(['/nav/myParkingList'])
      }
    }
    else {
      this.ParkingService.updateParking(this.newParking).subscribe(suc => { alert("?????????? ??????????") }, err => { console.log(err) })
      this.router.navigate(['/nav/myParkingList'])
    }
  }

  // ?????????? ???? ???????? ?????????? ????????????
  sizeForStr() {
    let str = ""
    if (this.ch1 == true)
      str += "?????? ????????,"
    if (this.ch2 == true)
      str += "??????????,"
    if (this.ch3 == true)
      str += "??????????????,"
    if (this.ch4 == true)
      str += "?????? ?????? ????????,"

    return str
  }

  // ?????????? ???????????? ???? ???????? ?????????? ???????????? ???? ??????????
  splitSTR(str: String) {
    let array = str.split(',')
    array.forEach(element => {
      if (element == '?????? ????????')
        this.ch1 = true
      if (element == '??????????')
        this.ch2 = true
      if (element == '??????????????')
        this.ch3 = true
      if (element == '?????? ?????? ????????')
        this.ch4 = true
    });
  }
  myFunction(imgs:any) {
    this.bigImage = imgs
  }

  ngOnInit(): void {
    this.newParking.AccountId = 3;
    this.newParking.UserId = this.UserService.userId;
    this.newParking.PayPerHour = 2;
    this.newParking.Lat=5
    this.newParking.Lan=8

    this.ActiveRoute.params.subscribe(x => {
      if (x["id"] > 0) {
        this.myTitle = "?????????? ????????"
        this.ParkingService.GetParkingById(x["id"]).subscribe(suc => {
          this.newParking = suc
          let size = this.newParking.SizeFor
          if (size != undefined)
            this.splitSTR(size)
        })
      }
      else
        this.myTitle = "?????????? ????????"

    }, err => { console.log(err) })
  }

}
