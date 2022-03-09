import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Rent } from 'src/classes/Rent';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RentService {
  url:string="https://localhost:44370/api/Rent/"
  constructor(public httpClient:HttpClient) { }

  // הוספת חשבון בנק לרשימה
  addRent(r:Rent):Observable<number>
  {
    return this.httpClient.put<number>(this.url+'addRent',r)
  }

  //הסרת חשבון בנק מהרשימה
  deleteRent(id:number):Observable<boolean>
  {
    return this.httpClient.delete<boolean>(this.url+ 'deleteRent/'+id)
  }
}
