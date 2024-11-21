// 1. Scenario: Library System
// You are creating a system to manage books in a library. Each book has a title, author, and ISBN. The system needs to allow updating the book’s availability status (whether it’s checked out or not) and updating its title.
// •	Question:
// How would you define a Book class with properties title, author, and isbn?
// –	What methods would you include to:
// •	Change the availability status (e.g., checkOut() and returnBook() methods)?
// •	Update the book’s title (e.g., updateTitle(newTitle) method)?

class Book {
    title;
    author;
    isbn;

    constructor(title,author,isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
    checkOut() {
        console.log(this.title,"book taken");
    }
    returnBook() {
        console.log(this.title,"book return");
    }
    updateTitle(newTitle) {
        console.log(this.title,"book title changes");
    }  
}
var philosophy =new Book("TheStranger","AlbertCamus","0679720200" ) 
philosophy.checkOut();
philosophy.returnBook();
philosophy.updateTitle();
console.log(philosophy);

// 2. Scenario: Product with Discount
// You are creating an e-commerce platform, and each product has a name, price, and category. You need to be able to apply a discount to the product and retrieve its final price after applying the discount.
// •	Question:
// How would you define a Product class with properties name, price, and category?
// –	What methods would you include to:
// •	Apply a discount to the product (e.g., applyDiscount(amount) method)?
// •	Retrieve the price after discount (e.g., getPriceAfterDiscount() method)?

class Product {
    name;
    price;
    category;

    constructor(name,price,category) {
        this.name = name;
        this.price = price;
        this.category = category;
    }
    applyDiscount(amount) {
        console.log(amount,"discount applied to this price");
    }
    getPriceAfterDiscount(amount) {
        console.log(this.price-amount,"discount price");
    } 
}
var grinder =new Product("prestige","5500","BenchGrinder");
grinder.applyDiscount(1800);
grinder.getPriceAfterDiscount(1800);
console.log(grinder);


// 3. Scenario: Bank Account System
// You are designing a banking system. Each account has an account holder name, account number, and balance. You need to be able to deposit, withdraw, and check the balance of the account.
// •	Question:
// How would you define a BankAccount class with properties accountHolderName, accountNumber, and balance?
// –	What methods would you include to:
// •	Deposit money into the account (e.g., deposit(amount) method)?
// •	Withdraw money from the account (e.g., withdraw(amount) method)?
// •	Check the current balance (e.g., getBalance() method)?

class BankAccount {
    accountholdername;
    accountnumber;
    balance;

    constructor(accountholdername,accountnumber,balance) {
        this. accountholdername =  accountholdername;
        this.accountnumber = accountnumber;
        this.balance= balance;
    }
    deposit(amount) {
        console.log(amount,"deposit amount");
    }
    withdraw(amount) {
        console.log(amount,"withdraw amount");
    } 
    getBalance() {
        console.log(this.balance,"balance check");
    }
}
var sbibank =new BankAccount("Tejaswini","12345O6789","2500");
sbibank.deposit(1500);
sbibank.withdraw(1500);
sbibank.getBalance();
console.log(sbibank);

// 4. Scenario: Vehicle Management
// You are managing a fleet of vehicles. Each vehicle has a model, license plate, and mileage. You need to track the mileage whenever the vehicle is driven.
// •	Question:
// How would you define a Vehicle class with properties model, licensePlate, and mileage?
// –	What methods would you include to:
// •	Simulate driving the vehicle (e.g., drive(miles) method, which increases the mileage)?
// •	Get the current mileage of the vehicle (e.g., getMileage() method)?

class Vehicle {
    model;
    licensePlate;
    mileage;

    constructor(model,licensePlate,mileage) {
        this.model =  model;
        this.licensePlate =  licensePlate;
        this.mileage = mileage;
    }
    drive(miles) {
        console.log(miles,"mileage increase");
    }
    getMileage() {
        console.log(this.mileage,"current mileage");
    }
}
var bike =new Vehicle("HondaLivo","15267","60kmpl");
bike.drive(15);
bike.getMileage();
console.log(bike);

// 5. Scenario: Grading System
// You are creating a system for students where each student has a name and a grade for a subject. The system should allow updating the student’s grade.
// •	Question:
// How would you define a Student class with properties name and grade?
// –	What methods would you include to:
// •	Set or update the grade for the student (e.g., setGrade(newGrade) method)?
// •	Retrieve the student’s current grade (e.g., getGrade() method)?

class Students {
    name;
    grade;

    constructor(name,grade) {
        this.name =  name;
        this.grade =  grade;
    }
    setGrade(newGrade)  {
        console.log(newGrade,"update grade");
    }
    getGrade()  {
        console.log(this.grade,"current grade");
    }
}   
var person =new Students("Tejaswini","7");
person.setGrade(7.5) ;
person.getGrade() ;
console.log(person);
