let gameLevel='god';

let character={
    x:0,
    y:0,
    z:0,
    vx:0,
    vy:0,
    vz:0,
    ax:0,
    ay:0,
    az:0
}
let mainCharacterV={
    vxW:0,
    vxA:0,
    vxS:0,
    vxD:0,
    vzW:0,
    vzA:0,
    vzS:0,
    vzD:0,
}
function characterMovement(){
    character.vx=character.ax*dt+mainCharacterV.vxW+mainCharacterV.vxA+mainCharacterV.vxS+mainCharacterV.vxD;
    character.vy+=character.ay*dt;
    character.vz=character.az*dt+mainCharacterV.vzW+mainCharacterV.vzA+mainCharacterV.vzS+mainCharacterV.vzD;

    character.x+=character.vx*dt;
    character.y+=character.vy*dt;
    character.z+=character.vz*dt;
}