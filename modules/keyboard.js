document.body.onkeydown=function(e){
    if(gameLevel=='god'){
        if(e.keyCode==65){
            mainCharacterV.vxA=-Math.cos(camera.rotation.y);
            mainCharacterV.vzA=Math.sin(camera.rotation.y);
        }
        else if(e.keyCode==68){
            mainCharacterV.vxD=Math.cos(camera.rotation.y);
            mainCharacterV.vzD=-Math.sin(camera.rotation.y);
        }
        else if(e.keyCode==87){
            mainCharacterV.vzW=-Math.cos(camera.rotation.y);
            mainCharacterV.vxW=-Math.sin(camera.rotation.y);
        }
        else if(e.keyCode==83){
            mainCharacterV.vzS=Math.cos(camera.rotation.y);
            mainCharacterV.vxS=Math.sin(camera.rotation.y);
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
            mainCharacterV.vxA=0;
            mainCharacterV.vzA=0;
        }
        else if(e.keyCode==68){
            mainCharacterV.vxD=0;
            mainCharacterV.vzD=0;
        }
        else if(e.keyCode==87){
            mainCharacterV.vzW=0;
            mainCharacterV.vxW=0;
        }
        else if(e.keyCode==83){
            mainCharacterV.vzS=0;
            mainCharacterV.vxS=0;
        }
        else if(e.keyCode==32){
            character.vy=0;
        }
        else if(e.keyCode==16){
            character.vy=0;
        }
    }
}