import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public UserService:UserService) { }
// aaa:boolean=this.UserService.isConnected

  ngOnInit(): void {
    
  }

}
