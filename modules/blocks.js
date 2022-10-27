let blocks={};
let cacheX=8;
let cacheY=128;
let cacheZ=8;
let area=cacheX*cacheZ;
let volume=area*cacheY;
let blockSize=30;
//initiate
let totalBlockTypes=1;
totalBlockTypes*=6;
let chunkMesh=new THREE.BufferGeometry();
let chunkTypes=initChunk();
let chunkAttribute=attributeLoader(chunkTypes);
let vertexAttribute=new THREE.BufferAttribute(chunkAttribute.vertex,3,0);
let uvAttribute=new THREE.BufferAttribute(chunkAttribute.uv,2,0)
let normalAttribute=new THREE.BufferAttribute(chunkAttribute.normals,3,0);
chunkMesh.setAttribute('position',vertexAttribute);
chunkMesh.setAttribute('uv',uvAttribute);
chunkMesh.setAttribute('normal',normalAttribute);
let blocksMaterial=new THREE.MeshStandardMaterial({map:blockTest});
let blocksMesh=new THREE.Mesh(chunkMesh,blocksMaterial);
chunkMesh.scale(blockSize,blockSize,blockSize);
blocksMesh.castShadow=blocksMesh.receiveShadow=true;
scene.add(blocksMesh);
function initChunk(){
    let chunkTypeBuffer=new ArrayBuffer(volume*2);
    let chunkTypes=new Uint16Array(chunkTypeBuffer);
    for(let x=0;x<cacheX;x++){
        for(let y=0;y<cacheY;y++){
            for(let z=0;z<cacheZ;z++){
                if(y<15){
                    chunkTypes[y*area+z*cacheX+x]=1;
                }
                else if(y==15 && Math.round(Math.random())){
                    chunkTypes[y*area+z*cacheX+x]=1;
                }
                else{
                    chunkTypes[y*area+z*cacheX+x]=0;
                }
            }
        }
    }
    return chunkTypes;
}
function attributeLoader(chunkTypes){
    let buffer=[];
    let uv=[];
    let normals=[];
    let reapedUvCoord1;
    let reapedUvCoord2;
    let fx=cacheX-1,fy=cacheY-1,fz=cacheZ-1;
    let index=area+cacheX+1;
    let cache2X=2*cacheX;
    let trueType;
    for(let y=1;y<fy;y++){
        for(let z=1;z<fz;z++){
            for(let x=1;x<fx;x++){
                if(chunkTypes[index]){
                    trueType=chunkTypes[index]-1;
                    if(!chunkTypes[index-1]){
                        buffer.push(x);buffer.push(y);buffer.push(z);buffer.push(x);buffer.push(y);buffer.push(z+1);buffer.push(x);buffer.push(y+1);buffer.push(z);
                        buffer.push(x);buffer.push(y+1);buffer.push(z);buffer.push(x);buffer.push(y);buffer.push(z+1);buffer.push(x);buffer.push(y+1);buffer.push(z+1);
                        reapedUvCoord1=(trueType+3)/totalBlockTypes;
                        reapedUvCoord2=(trueType+4)/totalBlockTypes;
                        uv.push(reapedUvCoord1);uv.push(0);
                        uv.push(reapedUvCoord2);uv.push(0);
                        uv.push(reapedUvCoord1);uv.push(1);
                        uv.push(reapedUvCoord1);uv.push(1);
                        uv.push(reapedUvCoord2);uv.push(0);
                        uv.push(reapedUvCoord2);uv.push(1);
                        for(let i=0;i<6;i++){
                            normals.push(-1);normals.push(0);normals.push(0);
                        }
                    }
                    if(!chunkTypes[index+1]){
                        buffer.push(x+1);buffer.push(y);buffer.push(z+1);buffer.push(x+1);buffer.push(y);buffer.push(z);buffer.push(x+1);buffer.push(y+1);buffer.push(z+1);
                        buffer.push(x+1);buffer.push(y+1);buffer.push(z+1);buffer.push(x+1);buffer.push(y);buffer.push(z);buffer.push(x+1);buffer.push(y+1);buffer.push(z);
                        reapedUvCoord1=(trueType+1)/totalBlockTypes;
                        reapedUvCoord2=(trueType+2)/totalBlockTypes;
                        uv.push(reapedUvCoord1);uv.push(0);
                        uv.push(reapedUvCoord2);uv.push(0);
                        uv.push(reapedUvCoord1);uv.push(1);
                        uv.push(reapedUvCoord1);uv.push(1);
                        uv.push(reapedUvCoord2);uv.push(0);
                        uv.push(reapedUvCoord2);uv.push(1);
                        for(let i=0;i<6;i++){
                            normals.push(1);normals.push(0);normals.push(0);
                        }
                    }
                    if(!chunkTypes[index-cacheX]){
                        buffer.push(x+1);buffer.push(y);buffer.push(z);buffer.push(x);buffer.push(y);buffer.push(z);buffer.push(x+1);buffer.push(y+1);buffer.push(z);
                        buffer.push(x+1);buffer.push(y+1);buffer.push(z);buffer.push(x);buffer.push(y);buffer.push(z);buffer.push(x);buffer.push(y+1);buffer.push(z);
                        reapedUvCoord1=(trueType+2)/totalBlockTypes;
                        reapedUvCoord2=(trueType+3)/totalBlockTypes;
                        uv.push(reapedUvCoord1);uv.push(0);
                        uv.push(reapedUvCoord2);uv.push(0);
                        uv.push(reapedUvCoord1);uv.push(1);
                        uv.push(reapedUvCoord1);uv.push(1);
                        uv.push(reapedUvCoord2);uv.push(0);
                        uv.push(reapedUvCoord2);uv.push(1);
                        for(let i=0;i<6;i++){
                            normals.push(0);normals.push(0);normals.push(-1);
                        }
                    }
                    if(!chunkTypes[index+cacheX]){
                        buffer.push(x);buffer.push(y);buffer.push(z+1);buffer.push(x+1);buffer.push(y);buffer.push(z+1);buffer.push(x);buffer.push(y+1);buffer.push(z+1);
                        buffer.push(x);buffer.push(y+1);buffer.push(z+1);buffer.push(x+1);buffer.push(y);buffer.push(z+1);buffer.push(x+1);buffer.push(y+1);buffer.push(z+1);
                        reapedUvCoord1=trueType/totalBlockTypes;
                        reapedUvCoord2=(trueType+1)/totalBlockTypes;
                        uv.push(reapedUvCoord1);uv.push(0);
                        uv.push(reapedUvCoord2);uv.push(0);
                        uv.push(reapedUvCoord1);uv.push(1);
                        uv.push(reapedUvCoord1);uv.push(1);
                        uv.push(reapedUvCoord2);uv.push(0);
                        uv.push(reapedUvCoord2);uv.push(1);
                        for(let i=0;i<6;i++){
                            normals.push(0);normals.push(0);normals.push(1);
                        }
                    }
                    if(!chunkTypes[index-area]){
                        buffer.push(x);buffer.push(y);buffer.push(z);buffer.push(x+1);buffer.push(y);buffer.push(z);buffer.push(x);buffer.push(y);buffer.push(z+1);
                        buffer.push(x);buffer.push(y);buffer.push(z+1);buffer.push(x+1);buffer.push(y);buffer.push(z);buffer.push(x+1);buffer.push(y);buffer.push(z+1);
                        reapedUvCoord1=(trueType+4)/totalBlockTypes;
                        reapedUvCoord2=(trueType+5)/totalBlockTypes;
                        uv.push(reapedUvCoord1);uv.push(0);
                        uv.push(reapedUvCoord2);uv.push(0);
                        uv.push(reapedUvCoord1);uv.push(1);
                        uv.push(reapedUvCoord1);uv.push(1);
                        uv.push(reapedUvCoord2);uv.push(0);
                        uv.push(reapedUvCoord2);uv.push(1);
                        for(let i=0;i<6;i++){
                            normals.push(0);normals.push(-1);normals.push(0);
                        }
                    }
                    if(!chunkTypes[index+area]){
                        buffer.push(x);buffer.push(y+1);buffer.push(z+1);buffer.push(x+1);buffer.push(y+1);buffer.push(z+1);buffer.push(x);buffer.push(y+1);buffer.push(z);
                        buffer.push(x);buffer.push(y+1);buffer.push(z);buffer.push(x+1);buffer.push(y+1);buffer.push(z+1);buffer.push(x+1);buffer.push(y+1);buffer.push(z);
                        reapedUvCoord1=(trueType+5)/totalBlockTypes;
                        reapedUvCoord2=(trueType+6)/totalBlockTypes;
                        uv.push(reapedUvCoord1);uv.push(0);
                        uv.push(reapedUvCoord2);uv.push(0);
                        uv.push(reapedUvCoord1);uv.push(1);
                        uv.push(reapedUvCoord1);uv.push(1);
                        uv.push(reapedUvCoord2);uv.push(0);
                        uv.push(reapedUvCoord2);uv.push(1);
                        for(let i=0;i<6;i++){
                            normals.push(0);normals.push(1);normals.push(0);
                        }
                    }
                }
                index++;
            }
            index+=2;
        }
        index+=cache2X;
    }
    return {vertex:new Uint16Array(buffer),uv:new Float32Array(uv),normals:new Int8Array(normals)};
}
/*
function initBlocks(){
    for(let x=0;x<cacheX;x++){
        blocks[x]={};
        for(let y=0;y<cacheY;y++){
            blocks[x][y]={};
            for(let z=0;z<cacheZ;z++){
                blocks[x][y][z]={};
                if(y<9){
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
*/
//animation
function aniBlocks(){
}
