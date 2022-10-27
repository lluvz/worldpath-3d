/*
//pixi background
//setup
let pixiApp=new PIXI.Application({
    width:window.innerWidth,
    height:window.innerHeight,
})
//pixiApp.resizeTo=window;
bgSrc.pureColor.width=pixiApp.view.width;
bgSrc.pureColor.height=pixiApp.view.height;
bgSrc.gradient.width=pixiApp.view.width;
bgSrc.gradient.height=pixiApp.view.height;
bgSrc.pureColor.tint='0x000011';
bgSrc.gradient.tint='0xaa3700';
pixiApp.stage.addChild(bgSrc.pureColor);
pixiApp.stage.addChild(bgSrc.gradient);
pixiApp.stage.addChild(bgSrc.stars);
//stars
bgSrc.stars.x=w/2;
bgSrc.stars.y=h/2;
bgSrc.stars.pivot.set(w/2,h/2);


//three background
//ambient light
let ambientLight=new THREE.AmbientLight(0xffffff,0.3);
scene.add(ambientLight);
//sun and sunlight
let sunGeometry=new THREE.SphereGeometry(70);
let sunMaterial=new THREE.MeshBasicMaterial({color:0xffffff});
let sun=new THREE.Mesh(sunGeometry,sunMaterial);
let sunMovementRedius=1777;
let sunOffsetRadian=Math.PI/3;
scene.add(sun);
let sunlight=new THREE.DirectionalLight(0xffffff);
sunlight.castShadow=true;
scene.add(sunlight);

//let pixi canvas to be the background texture
let background=new THREE.CanvasTexture(pixiApp.view);
scene.background=background;


//animations
function aniBackground(){
    sunlight.position.x=sun.position.x=sunMovementRedius*Math.sin(hour/12*Math.PI)*Math.cos(sunOffsetRadian);
    sunlight.position.y=sun.position.y=-sunMovementRedius*Math.cos(hour/12*Math.PI);
    sunlight.position.z=sun.position.z=-sunMovementRedius*Math.sin(hour/12*Math.PI)*Math.sin(sunOffsetRadian);
    background.needsUpdate=true;
    bgSrc.stars.angle=-hour*15;
    if(hour>5.5 && hour<6.5){
        bgSrc.pureColor.tint='0x00'+parseInt((hour-5.5)/2*0x37).toString(16)+parseInt(0x11+(hour-5.5)/2*238).toString(16);
        bgSrc.gradient.alpha=hour-5.5;
        bgSrc.stars.alpha=0.7-(hour-5.5)*0.35;
        sunMaterial.color.r=sunlight.color.r=0.88;
        sunMaterial.color.g=sunlight.color.g=0.33;
        sunMaterial.color.b=sunlight.color.b=0;
    }
    else if(hour>6.5 && hour <7.5){
        bgSrc.pureColor.tint='0x00'+parseInt((hour-5.5)/2*0x37).toString(16)+parseInt(0x11+(hour-5.5)/2*238).toString(16);
        bgSrc.gradient.alpha=7.5-hour;
        bgSrc.stars.alpha=0.7-(hour-5.5)*0.35;
        sunMaterial.color.r=sunlight.color.r=0.88+0.12*(hour-6.5)
        sunMaterial.color.g=sunlight.color.g=0.33+0.67*(hour-6.5)
        sunMaterial.color.b=sunlight.color.b=0.17*(hour-6.5)
    }
    else if(hour>7.5 && hour <17.5){
        bgSrc.pureColor.tint='0x0037ff';
        bgSrc.gradient.alpha=0;
        bgSrc.stars.alpha=0;
        sunMaterial.color.r=sunlight.color.r=1;
        sunMaterial.color.g=sunlight.color.g=1;
        sunMaterial.color.b=sunlight.color.b=0.17;
    }
    else if(hour>17.5 && hour<18.5){
        bgSrc.pureColor.tint='0x00'+parseInt((19.5-hour)/2*0x37).toString(16)+parseInt(0x11+(19.5-hour)/2*238).toString(16);
        bgSrc.gradient.alpha=(hour-17.5)*0.7;
        bgSrc.stars.alpha=(hour-17.5)*0.35;
        sunMaterial.color.r=sunlight.color.r=0.88+0.12*(18.5-hour)
        sunMaterial.color.g=sunlight.color.g=0.33+0.67*(18.5-hour)
        sunMaterial.color.b=sunlight.color.b=0.17*(18.5-hour)
    }
    else if(hour>18.5 && hour<19.5){
        bgSrc.pureColor.tint='0x00'+parseInt((19.5-hour)/2*0x37).toString(16)+parseInt(0x11+(19.5-hour)/2*238).toString(16);
        bgSrc.gradient.alpha=(19.5-hour)*0.7;
        bgSrc.stars.alpha=(hour-17.5)*0.35;
        sunMaterial.color.r=sunlight.color.r=0.88;
        sunMaterial.color.g=sunlight.color.g=0.33;
        sunMaterial.color.b=sunlight.color.b=0;
    }
    else{
        bgSrc.pureColor.tint='0x000011';
        bgSrc.gradient.alpha=0;
        bgSrc.stars.alpha=0.7;
        sunMaterial.color.r=sunlight.color.r=0.88;
        sunMaterial.color.g=sunlight.color.g=0.33;
        sunMaterial.color.b=sunlight.color.b=0;
    }
}
*/