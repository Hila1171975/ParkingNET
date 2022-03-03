import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BankAccount } from 'src/classes/BankAccount';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BankAccountService {
  url:string="https://localhost:44370/api/BankAccount/"
  isEdit=false
  constructor(public httpClient:HttpClient) { }

  //שליפת חשבון בנק ע"פ קוד
  GetBankAccountById(idBankAccount:number):Observable<BankAccount>
  {
    return this.httpClient.get<BankAccount>(this.url+ 'GetBankAccountById/'+idBankAccount)
  }
  // הוספת חשבון בנק לרשימה
  addBankAccount(b:BankAccount):Observable<number>
  {
    return this.httpClient.put<number>(this.url+'addBankAccount',b)
  }
  //עדכון חשבון בנק ברשימה
  updateBankAccount(b:BankAccount):Observable<boolean>
  {
    return this.httpClient.post<boolean>(this.url+ 'updateBankAccount',b)
  }
  //הסרת חשבון בנק מהרשימה
  deleteBankAccount(id:number):Observable<boolean>
  {
    return this.httpClient.delete<boolean>(this.url+ 'deleteBankAccount/'+id)
  }
}
