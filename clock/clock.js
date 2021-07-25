setInterval(() => {
    d1 = new Date(); //todays date
    h = d1.getHours();
    m = d1.getMinutes();
    s = d1.getSeconds();
    hrotations = 30*h + m/2;
    mrotations = 6*m;
    srotations = 6*s;

    hour.style.transform = `rotate(${hrotations}deg)`;
    minute.style.transform = `rotate(${mrotations}deg)`;
    second.style.transform = `rotate(${srotations}deg)`;    
}, 1000);