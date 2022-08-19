let blocks={};
let cacheX=32;
let cacheY=26;
let cacheZ=5;
let blockSize=30;
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
function drawBlocks(){
    for(x in blocks){
        for(y in blocks[x]){
            for(z in blocks[x][y]){
                if(blocks[x][y][z].type!='air'){
                    blocks[x][y][z].geometry=new THREE.BoxGeometry(blockSize,blockSize,blockSize);
                    blocks[x][y][z].material=new THREE.MeshStandardMaterial({map:blockTexes[blocks[x][y][z].type]});
                    blocks[x][y][z].mesh=new THREE.Mesh(blocks[x][y][z].geometry,blocks[x][y][z].material);
                    blocks[x][y][z].mesh.position.x=x*blockSize;
                    blocks[x][y][z].mesh.position.y=y*blockSize;
                    blocks[x][y][z].mesh.position.z=z*blockSize;
                    scene.add(blocks[x][y][z].mesh);
                }
            }
        }
    }
}
//animation
function aniBlocks(){

}
