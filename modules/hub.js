let Ehub=document.getElementById("hub");
Ehub.style.position='fixed'
Ehub.style.left=Ehub.style.top='0px'
let EhubPainter=Ehub.getContext('2d');
Ehub.width=window.innerWidth;
Ehub.height=window.innerHeight;
window.addEventListener('resize',function(){
    Ehub.width=window.innerWidth;
    Ehub.height=window.innerHeight;
})

//cross hair
let crossHairW=2;
let crossHairH=30;
let crossHairColor='aliceblue'

function aniHub(){
    EhubPainter.fillStyle='rgba(0,0,0,0)';
    EhubPainter.fillRect(0,0,window.innerWidth,window.innerHeight);
    //crosshair
    EhubPainter.fillStyle=crossHairColor;
    //EhubPainter.fillRect(300,300,300,300);
    EhubPainter.fillRect((window.innerWidth-crossHairH)*0.5,(window.innerHeight-crossHairW)*0.5,crossHairH,crossHairW);
    EhubPainter.fillRect((window.innerWidth-crossHairW)*0.5,(window.innerHeight-crossHairH)*0.5,crossHairW,crossHairH);
}