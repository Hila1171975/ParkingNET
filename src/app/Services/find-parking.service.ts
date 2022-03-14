import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Parking } from 'src/classes/Parking';
import { Rent } from 'src/classes/Rent';

@Injectable({
  providedIn: 'root'
})
export class FindParkingService {
  url:string="https://localhost:44370/api/FindParking/"
  constructor(public httpClient:HttpClient) { }

  closestParking:Array<Parking>=new Array<Parking>()

  // חיפוש 3 חניות הקרובות ביותר
  Search3Parkings(lat:number, lan:number,r:Rent):Observable<Array<Parking>>
  {
    debugger;
    return this.httpClient.post<Array<Parking>>(this.url+ 'Search3Parkings/'+ lat + '/' + lan, r)
  }
}
