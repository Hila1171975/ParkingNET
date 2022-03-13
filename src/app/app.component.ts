import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { Address } from 'ngx-google-places-autocomplete/objects/address';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  // @ViewChild("placesRef") placesRef : GooglePlaceDirective | undefined;
    
        public handleAddressChange(address: Address) {
       debugger

       console.log(address);
       
    }

  @ViewChild('addresstext') addresstext:  ElementRef | undefined;
  constructor(public router:Router){

  }
  location(){
    debugger
      const input = document.getElementById("pac-input") as HTMLInputElement;
      const options = {
       
        types: ['establishment', 'geocode'] ,
        componentRestrictions: { country:  'IL' }
      };
      const autocomplete = new google.maps.places.Autocomplete(input, options);
      
      autocomplete.addListener("place_changed", () => {
    debugger
        const place = autocomplete.getPlace();
    
        if (!place.geometry || !place.geometry.location) {
          // User entered the name of a Place that was not suggested and
          // pressed the Enter key, or the Place Details request failed.
          window.alert("No details available for input: '" + place.name + "'");
          return;
        }
      //  debugger
      // this.currentUser.address=this.addresstext.nativeElement.value;
      // this.currentUser.address_lat=place.geometry.location.lat();
      // this.currentUser.address_lng=place.geometry.location.lng();
    
      });
    
  }
  

  ngOnInit(): void {
    this.router.navigate(['/nav/myhome']);
   //this. location();
  }
  title = 'ParkingNET';
}
