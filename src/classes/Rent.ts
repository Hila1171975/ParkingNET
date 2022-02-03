export class Rent{
    constructor(
        public Id?:number,          // קוד השכרה
        public UserId?:number,      // קוד בעל החניה
        public ParkingId?:number,   // קוד חניה
        public EntryHour?:Date,     // שעת כניסה
        public LeavingHour?:Date,   // שעת יציאה
        public EntryDate?:Date,     // תאריך כניסה
        public LeavingDate?:Date,   // תאריך יציאה
    ){}
}