class Train{
    #departureTime = null;
    #arrivalTime = null;

    set arrivalTime(time){
        if(!this.#departureTime || this.#departureTime < time){
            this.#arrivalTime = time;
        }
    }
    
    set departureTime(time){
        if(!this.#arrivalTime || this.#arrivalTime > time){
            this.#departureTime = time;
        }
    }

    get tripTime(){
        const len = this.#arrivalTime - this.#departureTime;
        const d = new Date(len);
        console.log(d);
        const days = d.getDate();
        const hours = d.getHours();
        const minutes = d.getMinutes();

        return `${ days * 24 + hours }:${ minutes }`;
    }
}

const t1 = new Date(2021, 7, 31, 13, 40);
const t2 = new Date(2021, 8, 1, 10, 45);

const tr73 = new Train();

tr73.departureTime = t1;
tr73.arrivalTime = t2;

console.log(tr73.tripTime);
