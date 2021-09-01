class Product{
    #price;
    #name;
    constructor(name = 'Undefined product', price = 0){
        this.#name = name;
        this.#price = price;
    }

    get name(){
        return this.#name;
    }

    get price(){
        return this.#price;
    }
}

class Book extends Product{
    #author;
    #year;
    #yearPub;
    #pub;
    constructor(author, name, price, year, yearPub, pub){
        super(name, price);
        this.#author = author;
        this.#year = year;
        this.#yearPub = yearPub;
        this.#pub = pub;
    }
}

const book1 = new Book('Nathan Guide', 'C++ для чайников', 399.9, 1990, 2021, 'EKSMO');

console.log(book1);