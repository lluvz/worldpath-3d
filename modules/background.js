//ambient light
let ambientLight=new THREE.AmbientLight(0xffffff,0.07);
scene.add(ambientLight);
//test

let rotateAxis;
//sun and sunlight
let sunMovementRedius=viewDistance-700;
let sunlight=new THREE.DirectionalLight(0xffffff,0.21);
sunlight.castShadow=true;
scene.add(sunlight);

let sunMaterial=new THREE.SpriteMaterial({map:sunTexture,color:0xffffff});
let sun=new THREE.Sprite(sunMaterial);
sun.scale.set(300,300,1);
scene.add(sun);

//background stars
let starsGeometry=new THREE.SphereGeometry(viewDistance,64,64);
let temp;
let starsMaterial=new THREE.MeshBasicMaterial({map:starsTexture});
starsMaterial.side=1;
let starsSphere=new THREE.Mesh(starsGeometry,starsMaterial);
scene.add(starsSphere);

//sky
let skyGeometry=new THREE.SphereGeometry(viewDistance-100,64,64);
let skyMaterial=new THREE.MeshBasicMaterial({color:0x3388ee});
skyMaterial.transparent=1;
skyMaterial.side=1;
skyMaterial.opacity=0.5;
let skySphere=new THREE.Mesh(skyGeometry,skyMaterial);
scene.add(skySphere);
//sun rendered sky

let backgroundAngle
// animation
function aniBackground(){
    rotateAxis={x:0,y:Math.sin(latitude),z:Math.cos(latitude)};
    //stars sphere
    skySphere.position.x=starsSphere.position.x=character.x;
    skySphere.position.y=starsSphere.position.y=character.y;
    skySphere.position.z=starsSphere.position.z=character.z;
    backgroundAngle=day*Math.PI;
    starsSphere.setRotationFromAxisAngle(rotateAxis,backgroundAngle);

    sunlight.position.x=sunMovementRedius*Math.cos(planetAngle)*Math.sin(backgroundAngle);    
    sunlight.position.y=sunMovementRedius*(Math.sin(2*planetAngle)*0.5-Math.cos(planetAngle)*Math.cos(latitude)*Math.cos(backgroundAngle));
    sunlight.position.z=sunMovementRedius*(0.5*(1-Math.cos(planetAngle*2))+Math.cos(planetAngle)*Math.cos(backgroundAngle)*Math.sin(latitude));
    sun.position.x=sunlight.position.x+character.x;
    sun.position.y=sunlight.position.y+character.y;
    sun.position.z=sunlight.position.z+character.z;
    if(hour>5.5 && hour<6.5){
        sunMaterial.color.r=sunlight.color.r=0.88;
        sunMaterial.color.g=sunlight.color.g=0.33;
        sunMaterial.color.b=sunlight.color.b=0;
        skyMaterial.opacity=0.05;
    }
    else if(hour>6.5 && hour <7.5){
        sunMaterial.color.r=sunlight.color.r=0.88+0.12*(hour-6.5)
        sunMaterial.color.g=sunlight.color.g=0.33+0.55*(hour-6.5)
        sunMaterial.color.b=sunlight.color.b=0.55*(hour-6.5)
        skyMaterial.opacity=0.05+0.5*(hour-6.5)
    }
    else if(hour>7.5 && hour <17.5){
        sunMaterial.color.r=sunlight.color.r=0.97;
        sunMaterial.color.g=sunlight.color.g=0.88;
        sunMaterial.color.b=sunlight.color.b=0.55;
        skyMaterial.opacity=0.55;
    }
    else if(hour>17.5 && hour<18.5){
        sunMaterial.color.r=sunlight.color.r=0.88+0.12*(18.5-hour)
        sunMaterial.color.g=sunlight.color.g=0.33+0.55*(18.5-hour)
        sunMaterial.color.b=sunlight.color.b=0.55*(18.5-hour)
        skyMaterial.opacity=0.05+0.5*(18.5-hour)
    }
    else if(hour>18.5 && hour<19.5){
        sunMaterial.color.r=sunlight.color.r=0.88;
        sunMaterial.color.g=sunlight.color.g=0.33;
        sunMaterial.color.b=sunlight.color.b=0;
        skyMaterial.opacity=0.05;
    }
    else{
        sunMaterial.color.r=sunlight.color.r=0.88;
        sunMaterial.color.g=sunlight.color.g=0.33;
        sunMaterial.color.b=sunlight.color.b=0;
        skyMaterial.opacity=0.05;
    }
}