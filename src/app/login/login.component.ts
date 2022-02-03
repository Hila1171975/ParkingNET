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
  password2: String = ""
  userId:number=-2
  constructor(public UserService: UserService, public router: Router) { }

  //הוספת משתמש
  addUser() {
    debugger;
    if (this.newUser.Name != undefined && this.newUser.Password != undefined)
      this.UserService.isExist(this.newUser.Name, this.newUser.Password)
        .subscribe(suc => {
          this.newUser.Id = suc;
          if (this.newUser.Id == -1)
          {
            this.UserService.addUser(this.newUser)
            this.userId=this.newUser.Id
          }
          else
            alert("המשתמש כבר קיים במערכת")
        })
  }

  ngOnInit(): void {

  }

}
