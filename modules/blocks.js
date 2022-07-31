let blocks={};
let cacheX=32;
let cacheY=26;
let cacheZ=5;
//initiate
function initBlocks(){
    for(let x=0;x<cacheX;x++){
        blocks[x]={};
        for(let y=0;y<cacheY;y++){
            blocks[x][y]={};
            for(let z=0;z<cacheZ;z++){
                blocks[x][y][z]={};
                if(y<8){
                    blocks[x][y][z].type='empty';
                }
                else{
                    blocks[x][y][z].type='air';
                }
            }
        }
    }
}
function blockInitiate(){
    
}
//animation
function aniBlocks(){

}
