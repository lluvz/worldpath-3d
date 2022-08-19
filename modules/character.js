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
function characterMovement(){

    character.vx=character.vx+character.ax*dt;
    character.vy=character.vy+character.ay*dt;
    character.vz=character.vz+character.az*dt;

    character.x=character.x+character.vx*dt;
    character.y=character.y+character.vy*dt;
    character.z=character.z+character.vz*dt;
}