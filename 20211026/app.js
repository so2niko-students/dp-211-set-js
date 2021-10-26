const random = (type = 'rgb') => {
    const randomNumber = () => {
        return Math.floor(Math.random() * ( max - min + 1) + min);
    }

    let min, max;

    if(type === 'rgb'){
        min = 0;
        max = 255;
        const r = randomNumber();
        const g = randomNumber();
        const b = randomNumber();
        return `rgb(${ r },${ g },${ b })`;
    }
    if(type === 'dice'){
        min = 1;
        max = 6;
        return randomNumber();
    }

}

const draw = () => {
    const random = () => {
        return Math.random() * 100;
    }
    const fly = document.createElement('div');
    fly.classList.add('fly');
    fly.style.left = `${ random() }vw`;
    fly.style.top = `${ random() }vh`;

    document.body.appendChild(fly);
}

const color = random();
document.body.style.backgroundColor = color;
console.log(color);
console.log(random('dice'));

document.body.addEventListener('click', draw);

const counter = {
    i : 0,
    add : function(){
        this.i++;
        return this.i;
    }
}

counter.i = 100;
// for(let i = 0; i < 10; i++){
//     console.log('counter: ', counter.add());

// }

function backCount(){
    let i = 24;
    function back(){
        i -= 1;
        return i;
    }

    return back;
}

// function backCount(){
//     let i = 24;
//     i -= 1;
//     return i;
// }
const b = backCount();
for(let i = 0; i < 10; i++){
    console.log('time left: ', b());

}