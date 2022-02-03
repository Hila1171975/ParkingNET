import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BankAccountService {
  url:string="https://localhost:44370/"
  constructor(public http:HttpClient) { }
}
