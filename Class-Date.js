class myDate {
    //Khoi tao gia tri cu the cua property cua object
    constructor(day, month, year) {
        //Khoi tao property va gan gia tri neu tren
        this.day = day;
        this.month = month;
        this.year = year;
    }

    //Khoi tao method
    getDay() {
        //Tra ve gia tri cua property cua object
        return this.day;
    }

    getMonth() {
        return this.month;
    }

    getYear() {
        return this.year;
    }

    setDay(x) {
        this.day = x;
    }

    setMonth(x) {
        this.month = x;
    }

    setYear(x) {
        this.year = x;
    }
}

let x = new myDate();
x.setDay(18);
let day = x.getDay();
console.log(day);

let y = new myDate();
y.setMonth(1);
let month = y.getMonth();
console.log(month);

let z = new myDate();
z.setYear(2022);
let year = z.getYear();
console.log(year);

// let toDay = new myDate(18, 1, 2022);
// console.log(toDay.getDay());
// console.log(toDay.getMonth());
// console.log(toDay.getYear());
