let t='hello world';
let h=screen.height;
let w=screen.width;
let s=w/30;
//vconsole
//let vc=true;
//let vconsole=new window.VConsole();
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
let settingContainer=document.getElementById('settingContainer')
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
icons.rightAdd('set',sts);
//help
let help=true;
function hp(){
    console.log(t)
}
icons.leftAdd('help',hp);
//play
let play=true;
function pl(){
    console.log(t);
}
icons.rightAdd('play',pl);

let playButton=document.getElementById('playButton');
let playOption=document.getElementById('playOption');
let cancelPlay=document.getElementById('cancelPlay');
let newGame=document.getElementById('newGame');
playButton.onclick=function(){
    playOption.style.display='block';
    playButton.style.display='none';
}
cancelPlay.onclick=function(){
    playOption.style.display='none';
    playButton.style.display='block';
}
newGame.onclick=function(){
    
}


