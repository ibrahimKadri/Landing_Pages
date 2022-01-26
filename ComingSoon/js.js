let countDate = new Date('jul 1, 2022 00:00:00').getTime();

function countDown() {
    let now = new Date().getTime();
    gap = countDate - now;

    let sec = 1000;
    let min = sec * 60;
    let hr  = min * 60;
    let day = hr  * 24;

    let d = Math.floor( gap / (day));
    let h = Math.floor(( gap % (day)) / (hr));
    let m = Math.floor(( gap % (hr)) / (min));
    let s = Math.floor(( gap % (min)) / (sec));

    document.getElementById('day').innerText = d;
    document.getElementById('hour').innerText = h;
    document.getElementById('minute').innerText = m;
    document.getElementById('second').innerText = s;
}
setInterval(function(){
    countDown();
},1000)