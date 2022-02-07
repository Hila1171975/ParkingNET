import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Parking } from 'src/classes/Parking';
import { ParkingService } from '../Services/parking.service';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-edit-parking-details',
  templateUrl: './edit-parking-details.component.html',
  styleUrls: ['./edit-parking-details.component.css']
})
export class EditParkingDetailsComponent implements OnInit {
  newParking: Parking = new Parking();
  b: Boolean = true;
  myTitle: String = ""
  ch1: boolean = false
  ch2: boolean = false
  ch3: boolean = false
  ch4: boolean = false

  constructor(public ParkingService: ParkingService, public ActiveRoute: ActivatedRoute,public UserService:UserService) { }

  fileName = '';

  onFileSelected(event:any) {

      const file:File = event.target.files[0];

      if (file) {

          this.fileName = file.name;

          const formData = new FormData();

          formData.append("thumbnail", file);

          this.newParking.IMG1="C:/Users/hila1/Desktop/אייקונים ותמונות/" + file.name;

         // const upload$ = this.http.post("/api/thumbnail-upload", formData);

         // upload$.subscribe();
      }
  }

  add() {
    this.newParking.SizeFor = this.sizeForStr()
    if (this.newParking.Id == undefined) {
      this.ParkingService.addParking(this.newParking).
        subscribe(data => { this.b = data }, err => { console.log(err) })
      if (this.b = true)
        alert("החניה נוספה בהצלחה")
    }
    else {
      this.ParkingService.updateParking(this.newParking).subscribe(suc => { alert("עדכון הצליח") }, err => { console.log(err) })
    }
  }

  sizeForStr() {
    let str = ""
    if (this.ch1 == true)
      str += "רכב פרטי,"
    if (this.ch2 == true)
      str += "מסחרי,"
    if (this.ch3 == true)
      str += "אוטובוס,"
    if (this.ch4 == true)
      str += "רכב משא גדול,"

    return str
  }







  splitSTR(str: String) {
    let array = str.split(',')
    array.forEach(element => {
      if (element == 'רכב פרטי')
        this.ch1 = true
      if (element == 'מסחרי')
        this.ch2 = true
      if (element == 'אוטובוס')
        this.ch3 = true
      if (element == 'רכב משא גדול')
        this.ch4 = true
    });
  }

  ngOnInit(): void {
    this.newParking.AccountId = 3;
    this.newParking.CityId = 1;
    this.newParking.UserId = this.UserService.userId;
    this.newParking.PayPerHour = 2;

    this.ActiveRoute.params.subscribe(x => {
      if (x["id"] > 0) {
        this.myTitle = "עריכת חניה"
        this.ParkingService.GetParkingById(x["id"]).subscribe(suc => {
          this.newParking = suc
          let size = this.newParking.SizeFor
          if (size != undefined)
            this.splitSTR(size)
        })
      }
      else
        this.myTitle = "הוספת חניה"

    }, err => { console.log(err) })
  }

}
