class Box{
    //private fields
    #height = 1;
    #width = 2;
    #length = 3;
    static counter = 0;
    static elements = [];

    constructor(h, w, l){
        Box.count(this);
        this.#height = h;
        this.#width = w; 
        this.#length = l; 
    }

    static count(box){
        Box.counter += 1;
        Box.elements.push(box);
    }

    getRandom(from = 0, to = 100){
        return Math.floor(Math.random() * (to - from)) + from;
    }

    getVolume(){
        return this.#height * this.#width * this.#length;
    }

}

const box1 = new Box(1, 1, 1);
const box2 = new Box(1, 1, 2);
// box1.height = 222;
console.log(box1, box2);
console.log(Box.counter);
console.log(Box.elements);