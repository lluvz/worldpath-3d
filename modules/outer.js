let t='hello world';
let h=screen.height;
let w=screen.width;
let s=w/10;
//icons
let icons={
    left:[],
    right:[],
    leftAdd:function(name,click){//name need to be consistent with the src, which is in the imgs/icon and is a png img.
        let i=this.left.push(document.createElement('img'))-1;
        this.left[i].src='../imgs/icon/'+name+'.png';

        this.left[i].width=this.left[i].height=s;
        document.body.appendChild(this.left[i]);
        this.left[i].style.position='fixed';
        this.left[i].style.top=0;
        this.left[i].style.left=i*s+'px';
        this.left[i].onclick=click;
        this.left[i].alt=name;
    },
    rightAdd:function(name,click){//name need to be consistent with the src, which is in the imgs/icon and is a png img.
        let i=this.right.push(document.createElement('img'))-1;
        this.right[i].src='../imgs/icon/'+name+'.png';
        this.right[i].width=this.right[i].height=s;
        document.body.appendChild(this.right[i]);
        this.right[i].style.position='fixed';
        this.right[i].style.top=0;
        this.right[i].style.right=(i)*s+'px';
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
function sts(){
    console.log(t)
}
icons.rightAdd('set',sts);
//help
let help=true;
function hp(){
    console.log(t)
}
icons.leftAdd('help',hp);
