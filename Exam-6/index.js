class Book {
    #author;
    #price;
    #rentalPrice;
    #copiesAvailable;

    constructor(title, _author, _price, _rentalPrice, _copiesAvailable) {
        this.title = title;
        this.#author = _author;
        this.#price = _price;
        this.#rentalPrice = _rentalPrice;
        this.#copiesAvailable = _copiesAvailable;
    }

    getAuthor() {
        return this.#author;
    }

    setAuthor(_author) {
        this.#author = _author;
    }

    getPrice() {
        return this.#price;
    }

    setPrice(_price) {
        this.#price = _price;
    }

    getRentalPrice() {
        return this.#rentalPrice;
    }

    setRentalPrice(_rentalPrice) {
        this.#rentalPrice = _rentalPrice;
    }

    buyBook() {
        if (this.#copiesAvailable > 0) {
            this.#copiesAvailable--;
        } else {
            console.log("All copies of this book have been sold out.");
        }
    }

    rentBook() {
        if (this.#copiesAvailable > 0) {
            this.#copiesAvailable--;
            return this.#rentalPrice;
        } else {
            console.log("All copies of this book have been sold out.");
            return 0;
        }
    }

    returnBook() {
        if (this.#copiesAvailable > 0) {
            this.#copiesAvailable++;
            return this.#copiesAvailable;
        } else {
            console.log("All copies of this book have been sold out.");
            return 0;
        }
        this.#copiesAvailable++;
        return `Title: ${this.title}, Author: ${this.#author}, Price: ${this.#price}, Rental Price: ${this.#rentalPrice}, Copies Available: ${this.#copiesAvailable}`;
    }

    checkAvailability() {
        return this.#copiesAvailable;
    }
}


// Example usage:

const book1 = new Book("To Kill a Mockingbird", "Harper Lee", 12.99, 2.99, 50);
console.log(book1.getTitle()); // Output: To Kill a Mockingbird
console.log(book1.getAuthor()); // Output: Harper Lee
console.log(book1.getPrice()); // Output: 12.99
console.log(book1.getRentalPrice()); // Output: 2.99

book1.buyBook();

console.log(book1.checkAvailability()); // Output: 49

book1.rentBook();

console.log(book1.checkAvailability()); // Output: 48