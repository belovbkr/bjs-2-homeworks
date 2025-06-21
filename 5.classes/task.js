class PrintEditionItem {
    #state;
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.#state = 100;
        this.type = null;
    }

    fix() {
        return this.state *= 1.5;
    }

    set state(stateValue) {
        if (stateValue < 0) {
            this.#state = 0;
        } else if (stateValue > 100) {
            this.#state = 100;
        } else {
        this.#state = stateValue;
       }
    }

    get state() {
        return this.#state;
    }

}

let print1 = new PrintEditionItem('издание', 2006, 533);
console.log(print1.state);
console.log(print1.fix());
console.log(print1.state);

print1.state = 200;
console.log(print1.state);

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'magazine';
    }
}

let magazine1 = new Magazine('журнал', 2025, 30);
console.log(magazine1);

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = 'book';
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'novel';
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'fantastic';
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'detective';
    }
}

let book1 = new Book('автор', 'книга', 1812, 716);
console.log(book1);

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        let searchingBook = null;
        for (let book of this.books) {
            if (book[type] === value) {
                searchingBook = book;
            } 
        }  
        return searchingBook;   
    }

    giveBookByName(bookName) {
        let searchingBook = null;
        for (let book of this.books) {
            if (book.name === bookName) {
                let indexOfSearchingBook = this.books.findIndex((bookNumber) => bookNumber.name === bookName);
                searchingBook = this.books[indexOfSearchingBook];
                this.books.splice(indexOfSearchingBook, 1);
                break;
            }
        } 
        return searchingBook;
    }
}

let book2 = new DetectiveBook('сыщик', 'детектив', 1923, 323);

let library1 = new Library('Библиотека');
library1.addBook(book1);
library1.addBook(book2);
console.log(library1);

console.log(library1.findBookBy('releaseDate', 1812));

console.log(library1.giveBookByName('детектив'));
console.log(library1);

console.log(library1.books[0].releaseDate);