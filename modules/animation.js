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
let startHour=7;
totalTime+=startHour*2500*realTimePerDay;

function animate(){
    requestAnimationFrame(animate);

    //canvas size
    renderer.setSize(pixiApp.view.width,pixiApp.view.height);

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
    aniBackground();
    aniBlocks();
    renderer.render(scene,camera);
}
animate();