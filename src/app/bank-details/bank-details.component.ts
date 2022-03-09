import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BankAccount } from 'src/classes/BankAccount';
import { BankAccountService } from '../Services/bank-account.service';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.component.html',
  styleUrls: ['./bank-details.component.css']
})
export class BankDetailsComponent implements OnInit {
  newBankAccount: BankAccount = new BankAccount()

  constructor(public BankAccountService: BankAccountService, public router: Router, public activeRouter: ActivatedRoute, public UserService: UserService) {
    this.newBankAccount.UserId = UserService.userId;
  }

  ngOnInit(): void {
    // this.activeRouter.params.subscribe(x => {
    //   if (x["id"]) {
    //     //אם זה עריכה
    //     this.BankAccountService.isEdit=true
    //     this.BankAccountService.GetBankAccountById(x["id"]).subscribe(y => { this.newBankAccount = y }, err => { console.log("err") });
    //   }
    // })
  }
  save() {
    debugger;
    //זה הוספה תוסיף
    if (this.BankAccountService.isEdit == false) {
      this.BankAccountService.addBankAccount(this.newBankAccount).subscribe(suc => {
        if (suc == -1)
          alert("תקלה בהכנסת פרטי חשבון נסה שנית")
        else
        {
          this.newBankAccount.Id=suc;
          alert("החשבון נוסף בהצלחה")
        }   
      }, err => { console.log("err") });
    }
    //אם זה עריכה
    else {
      debugger
      this.BankAccountService.updateBankAccount(this.newBankAccount).subscribe(suc => { console.log("suc") }, err => { console.log("err") });
    }
    //מעדכן חזרה את המשתנה
    this.BankAccountService.isEdit = false
    // //מנווט לדף של הרשימה
    // this.router.navigate(['//listCategory'])
  }
}

