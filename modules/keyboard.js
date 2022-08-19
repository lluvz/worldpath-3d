document.body.onkeydown=function(e){
    if(gameLevel=='god'){
        if(e.keyCode==65){
            character.vx=-1;
        }
        else if(e.keyCode==68){
            character.vx=1;
        }
        else if(e.keyCode==87){
            character.vz=-1;
        }
        else if(e.keyCode==83){
            character.vz=1;
        }
        else if(e.keyCode==32){
            character.vy=1;
        }
        else if(e.keyCode==16){
            character.vy=-1;
        }
    }
}
document.body.onkeyup=function(e){
    if(gameLevel=='god'){
        if(e.keyCode==65){
            character.vx=0;
        }
        else if(e.keyCode==68){
            character.vx=0;
        }
        else if(e.keyCode==87){
            character.vz=0;
        }
        else if(e.keyCode==83){
            character.vz=0;
        }
        else if(e.keyCode==32){
            character.vy=0;
        }
        else if(e.keyCode==16){
            character.vy=0;
        }
    }
}