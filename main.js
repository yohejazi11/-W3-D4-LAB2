

setInterval(function () {
    const Box=document.getElementById('box');

    let color=Math.floor(Math.random()*16777215).toString(16);
    let positionX=Math.random()*1000;
    let positionY=Math.random()*100;

    let scaleX=Math.random()*1000;
    let scaleY=Math.random()*1000;
    Box.style.left=positionX+"px";
    Box.style.top=positionY+"px";
    Box.style.width=scaleX+"px";
    Box.style.height=scaleY+"px";
    Box.style.backgroundColor="#"+color;
}, 2000);

