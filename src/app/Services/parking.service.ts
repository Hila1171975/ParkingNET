import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Parking } from 'src/classes/Parking';

@Injectable({
  providedIn: 'root'
})
export class ParkingService {
  url:string="https://localhost:44370/api/Parking/"
  constructor(public http:HttpClient) {}

    // שליפת רשימת חניות
    GetParkingList():Observable<Array<Parking>>
    {
      return this.http.get<Array<Parking>>(this.url+"GetParkingList")
    }

    // שליפת חניה לפי קוד
    GetParkingById(id:number):Observable<Parking>
    {
      return this.http.get<Parking>(this.url+"GetParkingById/"+id)
    }
     // שליפת רשימת חניות לפי קוד משתמש
     GetParkingListByUserId(UserId:number):Observable<Array<Parking>>
     {
       debugger
       return this.http.get<Array<Parking>>(this.url+"GetParkingListByUserId/"+UserId)
     }
    
    // מחיקת חניה
    // deleteParking(id:number){
      
    // }

    // הוספת חניה
    addParking(p:Parking):Observable<boolean>
    {
      return this.http.put<boolean>(this.url+"addParking",p)
    }

     // עדכון חניה
     updateParking(p:Parking):Observable<boolean>
     {
       return this.http.post<boolean>(this.url+"updateParking",p)
     }

     // הוספת תמונה
     public uploadImage(formData: FormData): Observable<Array<string>> {
      return this.http.post<Array<string>>(`${this.url}uploadImage/`, formData)
    }
     

   
}
