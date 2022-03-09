import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/classes/Users';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  newUser: Users = new Users()
  existUser: Users = new Users()
  repeatPassword: String = ""
  userId: number = -2
  constructor(public UserService: UserService, public router: Router) { }

  //הוספת משתמש
  addUser() {
    debugger;
    if (this.newUser.Name != undefined && this.newUser.Password != undefined)
      this.UserService.isExist(this.newUser.Name, this.newUser.Password)
        .subscribe(suc => {
          this.newUser.Id = suc;
          if (this.newUser.Id == -1) {
            this.UserService.addUser(this.newUser)
            this.userId = this.newUser.Id
          }
          else
            alert("המשתמש כבר קיים במערכת")
        })
  }
  //התחברות משתמש
  getUser() {
    debugger;
    if (this.existUser.Name != undefined && this.existUser.Password != undefined)
      this.UserService.isExist(this.existUser.Name, this.existUser.Password)
        .subscribe(suc => {
          this.existUser.Id = suc;
          if (this.existUser.Id == -1) {
            alert("המשתמש אינו קיים, אנא הירשם תחילה")
          }
          else {
            this.UserService.userId = this.existUser.Id
            this.UserService.userName=this.existUser.Name
            this.UserService.isConnected=true
            alert(this.existUser.Name + " ברוך הבא")
            this.router.navigate(['/nav/myhome']) //מנווט לדף הבית
          }
        })
  }
  ngOnInit(): void {
  }

}
