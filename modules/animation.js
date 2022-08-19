//inner properties
let fpsElement=document.getElementById('fps');
let timeElement=document.getElementById('time');

//time and fps
let thisTime=new Date().getTime();
let lastTime=new Date().getTime();
let dt;
let fps;
let totalTime=0;
let realTimePerDay=1;//unite: minite
let day;
let hour;
let minite;
let second;
let startHour=5;
totalTime+=startHour*2500*realTimePerDay;

//pause
let paused=false;
let pausingTime;
function pause(){
    paused=true;
    pausingTime=new Date().getTime();
}
function restart(){
    paused=false;
    pausingTime=new Date().getTime()-pausingTime;
    totalTime-=pausingTime;
    animate();
}

function animate(){
    //camera
    camera.position.x=character.x;
    camera.position.y=character.y+230;
    camera.position.z=character.z+777;

    //time & fps
    //dt
    thisTime=new Date().getTime();
    dt=thisTime-lastTime;
    lastTime=thisTime;
    //fps
    fps=1000/dt;
    fpsElement.innerHTML='FPS: '+fps.toFixed(1);
    //totalTime
    totalTime+=dt;
    day=totalTime/60000/realTimePerDay;
    hour=day%1*24;
    minite=hour%1*60;
    second=minite%1*60;
    timeElement.innerHTML='Time: '+parseInt(day)+'d '+parseInt(hour)+':'+parseInt(minite)+':'+parseInt(second);

    //animations
    characterMovement();
    aniBackground();
    aniBlocks();
    raycast();
    composer.render();
    if(paused==false){
        requestAnimationFrame(animate);
    }
}
animate();