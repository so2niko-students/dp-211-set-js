class Theme{
    constructor(){
        this.checkBoxTheme = document.querySelector('#ch-b-theme');
        this.themes = ['black', 'red', 'wheat', 'blue'];
        this.themesCounter = 0;
        // this.checkBoxTheme.addEventListener('click', this.onClickCheckBoxTheme);
        document.body.addEventListener('click', this.onClickCheckBoxTheme);
    }

    nextColor = () => {
        return this.themes[(++this.themesCounter) % this.themes.length];
    }

    onClickCheckBoxTheme = (ev) => {
        console.log(ev.currentTarget, ev.target);
        document.body.style.backgroundColor = this.nextColor();
    }
}

const theme = new Theme();

const marks = [11, 10, 9, 12];
const marks2 = [ ...marks ];
marks2.push(34,34,34,3,34)
console.log(marks, marks2);

const summator = (...elements) => elements.reduce((acc, el) => acc + el);

console.log(summator(1,2), summator(1,2,3), summator(1,2,3,4));

/*
call
apply
bind
*/

//Police immitator
/*
- Наличие масок
- Наличие стоячих людей
- Наличие сертфиката или ПЦР-реста

если
все в масках, но есть стоячие люди -- штраф водителю 345 за каждого стоячего
все сидят, но есть люди без масок -- штраф водителю 1222
*/

const isAllInMasks = () => !!Math.floor(Math.random() * 2);
const standPeopleCount = () => Math.floor(Math.random() * 28) - 18;

const checkMarchrouteTaxi = () => {
    const masks = isAllInMasks();
    const people = standPeopleCount();

    if(isAllInMasks || people > 0){
        return people * 345;
    }

    if(people <= 0 && !isAllInMasks){
        return 1222;
    }

    if(people > 0 && !isAllInMasks){
        return people * 345 + 1222;
    }

    return 0;

}

function delit(a = 0, b = 0){
    return a / b;
}



console.log(delit());

const lighter = (color) => {
    const colors = {
        green : 'GO',
        yellow : 'ready',
        red : 'STOP',
        marine : false
    };

    return colors[color] ?? 'WAKE UP';
}

console.log(lighter('marine'));