let longitude=Math.random()*Math.PI;
let latitude=(Math.random()-1)*Math.PI;
let planetAngle=(Math.random()/3)*Math.PI;
let orbitAngle=(Math.random()/6)*Math.PI;

//Dom element
let EworldPosition=document.getElementById('worldPosition');
function aniGeometry(){
    if(EworldPosition.style.display!='none'){
        EworldPosition.innerHTML=`Longitude: ${(longitude/Math.PI*180).toFixed(1)} Latitude: ${(latitude/Math.PI*180).toFixed(1)}`
    }
}