export class Parking{
    constructor(
        public Id?:number,              // קוד חניה
        public UserId?:number,          // קוד בעל החניה
        public Address?:string,          // כתובת
        public PayPerHour?:number,      // תשלום לשעה
        public Lat?:number,             // X
        public Lan?:number,             // Y
        public ElectronicGate?:boolean, // שער אלקטרוני
        public Indoor?: boolean,        // מקורה/ לא מקורה
        public Shady?:boolean,          // מוצל/ לא מוצל
        public SizeFor?:string,         // מתאים ל
        public CancelTime?:number,      // זמן ביטול מראש
        public Notes?:string,           // הערות
        public IMG1?:string,            // תמונה 1
        public IMG2?:string,            // תמונה 2
        public IMG3?:string,            // תמונה 3
        public AccountId?:number        // קוד חשבון
    ){}
}