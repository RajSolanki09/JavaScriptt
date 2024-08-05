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

    buyBook(copies = 1) {
        if (this.#copiesAvailable >= copies) {
            this.#copiesAvailable -= copies;
            console.log(`${copies} book(s) bought successfully.`);
        } else {
            console.log(`Only ${this.#copiesAvailable} copies are available. Cannot buy ${copies} copies.`);
        }
        return `Title: ${this.title}, Author: ${this.#author}, Price: ${this.#price}, Rental Price: ${this.#rentalPrice}, Copies Available: ${this.#copiesAvailable}`;
    }

    rentBook(copies = 1) {
        if (this.#copiesAvailable >= copies) {
            this.#copiesAvailable -= copies;
            console.log(`${copies} book(s) rented successfully.`);
            return this.#rentalPrice * copies;
        } else {
            console.log(`Only ${this.#copiesAvailable} copies are available. Cannot rent ${copies} copies.`);
            return 0;
        }
    }

    returnBook(copies = 1) {
        this.#copiesAvailable += copies;
        console.log("Book(s) returned successfully");
        return `Title: ${this.title}, Author: ${this.#author}, Price: ${this.#price}, Rental Price: ${this.#rentalPrice}, Copies Available: ${this.#copiesAvailable}`;
    }

    checkAvailability() {
        return `Title: ${this.title}, Author: ${this.#author}, Price: ${this.#price}, Rental Price: ${this.#rentalPrice}, Copies Available: ${this.#copiesAvailable}`;
    }
}

let book = new Book("book1", "auther1", 100, 30, 5);

console.log(book.checkAvailability());

book.buyBook(2);
console.log(book.checkAvailability());

let rentalPrice = book.rentBook(2);
console.log(book.checkAvailability());

book.returnBook(3);
console.log(book.checkAvailability());
