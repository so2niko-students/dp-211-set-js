const linkZones = 'http://worldtimeapi.org/api/timezone/';


// fetch(europeTime).then(resp => resp.json()).then(d => console.log(d)); 
// const ajax = async () => {
//     const resp = await fetch(europeTime);
//     const data = await resp.json();
//     console.log(data);
// }

const ajax = (link, callback) => {
    fetch(link)
        .then(resp => resp.json())
        .then(d => {
            callback(d);
        });
}


const loadZones = () => {
    ajax(linkZones, renderTimeZones);
};

const renderTimeZones = zones => {
    const selectZones = document.querySelector('#timezones');
    const options = zones.map(zone => `<option value="${ zone }">${ zone }</option>`).join('');
    selectZones.innerHTML = options;

    selectZones.addEventListener('input', onSelectZone);
}

const onSelectZone = ev => {
    loadTime(ev.target.value);
}

const loadTime = zone => {
    ajax(`${ linkZones }${ zone }`, renderDateTime);
}

const renderDateTime = ({ timezone, datetime }) => {
    const header = document.querySelector('.date-time');
    const regDateTime = /.*T(\d{2}:\d{2}:\d{2})\..*/;
    const time = datetime.replace(regDateTime, '$1');
    const str = `<div>${ timezone } : ${ time }</div>`;
    header.insertAdjacentHTML("beforeend", str);

    setMemo(timezone);
}

const setMemo = zone => {
    const zones = new Set(JSON.parse(localStorage.getItem('timezones') ?? '[]'));
    zones.add(zone);
    localStorage.setItem('timezones', JSON.stringify([...zones]));
}

(() => {
    const zones = JSON.parse(localStorage.getItem('timezones') ?? '[]');
    zones.forEach(loadTime);
    loadZones();
})();
