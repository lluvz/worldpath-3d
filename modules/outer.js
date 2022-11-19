let t='hello world';
let h=screen.height;
let w=screen.width;
let s=w/30;
//icons
let icons={
    left:[],
    right:[],
    leftAdd:function(name,click){//name need to be consistent with the src, which is in the imgs/icon and is a png img.
        let i=this.left.push(document.createElement('img'))-1;
        this.left[i].src=iconSrc[name];

        this.left[i].width=this.left[i].height=50;
        document.body.appendChild(this.left[i]);
        this.left[i].style.position='fixed';
        this.left[i].style.top=0;
        this.left[i].style.left=i*50+'px';
        this.left[i].onclick=click;
        this.left[i].alt=name;
    },
    rightAdd:function(name,click){//name need to be consistent with the src, which is in the imgs/icon and is a png img.
        let i=this.right.push(document.createElement('img'))-1;
        this.right[i].src=iconSrc[name];
        this.right[i].width=this.right[i].height=50;
        document.body.appendChild(this.right[i]);
        this.right[i].style.position='fixed';
        this.right[i].style.top=0;
        this.right[i].style.right=(i)*50+'px';
        this.right[i].onclick=click;
        this.right[i].alt=name;
    }
}

//fullscreen
let fullscreen=false;
if(document.body.requestFullscreen==undefined){
    document.body.requestFullscreen=document.body.webkitRequestFullscreen;
}
if(document.exitFullscreen==undefined){
    document.exitFullscreen=document.webkitExitFullscreen;
}
function fs(){
    if(fullscreen==false){
        document.body.requestFullscreen();
        fullscreen=true;
    }
    else{
        document.exitFullscreen();
        fullscreen=false;
    }
}
icons.leftAdd('fullscreen',fs);

//sets
let set=false;
let settingContainer=document.getElementById('settingContainer');
function sts(){
    if(set==false){
        settingContainer.style.display='block';
        set=true;
    }
    else{
        settingContainer.style.display='none';
        set=false;
    }
}
//show fps
let fpsSetting=document.getElementById('showFPS');
fpsSetting.onclick=function(){
    if(fpsSetting.checked==true){
        fpsElement.style.display='block';
    }
    else{
        fpsElement.style.display='none';
    }
}
icons.rightAdd('set',sts);
//show time
let timeShowing=document.getElementById('showTime')
timeShowing.onclick=function(){
    if(timeShowing.checked==true){
        timeElement.style.display='block';
    }
    else{
        timeElement.style.display='none';
    }
}
//show vconsole
let vconsole;
let vconsoleSetting=document.getElementById('showConsole');
vconsoleSetting.onclick=function(){
    if(vconsoleSetting.checked==true){
        vconsole=new window.VConsole();
    }
    else{
        vconsole.destroy();
        vconsole=null;
    }
}
//post processing switch
let EpostProcessing=document.getElementById('postProcessing');

//help
let help=true;
function hp(){
    console.log(t)
}
icons.leftAdd('help',hp);

//play
let play=false;
function pl(){
    if(!play){
        playContainer.style.display='block';
        gameOption.style.display='block';
        play=true;
    }
    else{
        playContainer.style.display='none';
        gameOption.style.display='none';
        play=false;
    }
}
icons.rightAdd('play',pl);

let playContainer=document.getElementById('playContainer');
let playButton=document.getElementById('playButton');
let playOption=document.getElementById('playOption');
let cancelPlay=document.getElementById('cancelPlay');
let newGame=document.getElementById('newGame');
let gameOption=document.getElementById('gameOption');
playButton.onclick=function(){
    playOption.style.display='block';
    playButton.style.display='none';
}
cancelPlay.onclick=function(){
    playOption.style.display='none';
    playButton.style.display='block';
}
newGame.onclick=function(){
    playOption.style.display='none';
    playContainer.style.display='none';
}

//mobile buttons
let moveButton=document.getElementById('moveButton');
let moveButtonPointerDown=false;

moveButton.onpointerdown=function(){
    moveButtonPointerDown=true;
}
document.addEventListener('pointerdown',function(e){
    if(moveButtonPointerDown){
        moveButton.style.top=e.clientY-35+'px';
        moveButton.style.left=e.clientX-35+'px';
        character.vx=(e.clientX-0.07*window.innerWidth)/1000;
        character.vy=(-e.clientY+0.73*window.innerHeight)/1000;
    }
})
document.addEventListener('pointerup',function(){
    character.vx=0;
    character.vy=0;
    moveButtonPointerDown=false;
    moveButton.style.top=null;
    moveButton.style.left='7vw';
    moveButton.style.bottom='27vh';
})

