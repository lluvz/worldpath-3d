//ambient light
let ambientLight=new THREE.AmbientLight(0xffffff,0.3);
scene.add(ambientLight);
//test
scene.background=new THREE.Color(0x070517);
//sun and sunlight
let sunlight=new THREE.DirectionalLight(0xffffff);
sunlight.castShadow=true;
scene.add(sunlight);
let sunOffsetRadian=Math.PI/3;

let sunMaterial=new THREE.SpriteMaterial({color:0xffffff});
let sun=new THREE.Sprite();
let sunMovementRedius=100;


//animation
function aniBackground(){
    sunlight.position.x=sun.position.x=sunMovementRedius*Math.sin(hour/12*Math.PI)*Math.cos(sunOffsetRadian);
    sunlight.position.y=sun.position.y=-sunMovementRedius*Math.cos(hour/12*Math.PI);
    sunlight.position.z=sun.position.z=-sunMovementRedius*Math.sin(hour/12*Math.PI)*Math.sin(sunOffsetRadian);
    if(hour>5.5 && hour<6.5){
        sunMaterial.color.r=sunlight.color.r=0.88;
        sunMaterial.color.g=sunlight.color.g=0.33;
        sunMaterial.color.b=sunlight.color.b=0;
    }
    else if(hour>6.5 && hour <7.5){
        sunMaterial.color.r=sunlight.color.r=0.88+0.12*(hour-6.5)
        sunMaterial.color.g=sunlight.color.g=0.33+0.67*(hour-6.5)
        sunMaterial.color.b=sunlight.color.b=0.17*(hour-6.5)
    }
    else if(hour>7.5 && hour <17.5){
        sunMaterial.color.r=sunlight.color.r=1;
        sunMaterial.color.g=sunlight.color.g=1;
        sunMaterial.color.b=sunlight.color.b=0.17;
    }
    else if(hour>17.5 && hour<18.5){
        sunMaterial.color.r=sunlight.color.r=0.88+0.12*(18.5-hour)
        sunMaterial.color.g=sunlight.color.g=0.33+0.67*(18.5-hour)
        sunMaterial.color.b=sunlight.color.b=0.17*(18.5-hour)
    }
    else if(hour>18.5 && hour<19.5){
        sunMaterial.color.r=sunlight.color.r=0.88;
        sunMaterial.color.g=sunlight.color.g=0.33;
        sunMaterial.color.b=sunlight.color.b=0;
    }
    else{
        sunMaterial.color.r=sunlight.color.r=0.88;
        sunMaterial.color.g=sunlight.color.g=0.33;
        sunMaterial.color.b=sunlight.color.b=0;
    }
}