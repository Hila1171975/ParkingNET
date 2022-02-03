export class BankAccount{
    constructor(
      public Id?:number,            // קוד חשבון בנק?????
      public UserId?:number,        // קוד בעל חשבון/ קוד משתמש
      public OwnerName?:string,     // שם בעל החשבון
      public Bank?:string,          // בנק
      public Branch?:string,        // סניף
      public AccountNumber?:string  // מספר חשבון
    ){}
}