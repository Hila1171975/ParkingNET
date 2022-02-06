import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Users } from 'src/classes/Users';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url: string = "https://localhost:44370/api/User/"
  userId: number = -2
  userName?: string = "אורח"
  isConnected: boolean = false


  constructor(public http: HttpClient, public router: Router) { }

  //הוספת משתמש
  addUser(user: Users) {
    this.http.put<number>(this.url + 'addUser', user).subscribe(
      // suc => { }),
      suc => {
        this.userId = suc
        this.userName=user.Name
        if (this.userId != -1) {
          this.isConnected = true
          alert("ההצטרפות נקלטה בהצלחה")
          this.router.navigate(['/nav/myhome']) //מנווט לדף הבית
        }
        else
          alert("תקלה ברישום משתמש חדש נסה שנית!!!")
      },
      err => { console.log(err) });
  }

  //  עדכון משתמש  


  // האם לקוח קיים
  isExist(name: string, password: string): Observable<number> {
    return this.http.get<number>(this.url + 'isExist/' + name + '/' + password)
  }
}




