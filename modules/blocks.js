let blocks={};
let cacheX=64;
let cacheY=128;
let cacheZ=64;
let area=cacheX*cacheZ;
let volume=area*cacheY;
let blockSize=30;
//initiate
let totalBlockTypes=1;
totalBlockTypes*=6;
//let positionMemory,uvMemory,normalMemory;
//let surfaceCursor;
let positionView,uvView,normalView;
let blocksTypes=initTypes();
let blocksGeometry=new THREE.BufferGeometry();
let vertexAttribute
let uvAttribute
let normalAttribute
attributeLoader();
/*
uvAttribute.count=surfaceCursor*6;
normalAttribute.count=surfaceCursor*6;
vertexAttribute.count=surfaceCursor*6;
 */
let blocksMaterial=new THREE.MeshStandardMaterial({map:blockTest});
let blocksMesh=new THREE.Mesh(blocksGeometry,blocksMaterial);
blocksMesh.castShadow=blocksMesh.receiveShadow=true;
scene.add(blocksMesh);
function initTypes(){
    let chunkTypeBuffer=new ArrayBuffer(volume*2);
    let blocksTypes=new Uint16Array(chunkTypeBuffer);
    for(let x=0;x<cacheX;x++){
        for(let y=0;y<cacheY;y++){
            for(let z=0;z<cacheZ;z++){
                if(y<15){
                    blocksTypes[y*area+z*cacheX+x]=1;
                }
                else if(y==15 && Math.round(Math.random())){
                    blocksTypes[y*area+z*cacheX+x]=1;
                }
                else{
                    blocksTypes[y*area+z*cacheX+x]=0;
                }
            }
        }
    }
    return blocksTypes;
}
function attributeGenerate(){
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
                if(blocksTypes[index]){
                    trueType=blocksTypes[index]-1;
                    if(!blocksTypes[index-1]){
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
                    if(!blocksTypes[index+1]){
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
                    if(!blocksTypes[index-cacheX]){
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
                    if(!blocksTypes[index+cacheX]){
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
                    if(!blocksTypes[index-area]){
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
                    if(!blocksTypes[index+area]){
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
    return {position:buffer,uv:uv,normals:normals}
}
function attributeLoader(){
    let attributes=attributeGenerate();
    /*
    surfaceCursor=attributes.position.length/18;
    positionMemory=new WebAssembly.Memory({initial:Math.ceil(attributes.position.length*2/64/1024),maximum:Math.ceil(volume*6*6*3/64/1024)});
    uvMemory=new WebAssembly.Memory({initial:Math.ceil(attributes.uv.length*4/64/1024),maximum:Math.ceil(volume*6*6*2*2/64/1024)});
    normalMemory=new WebAssembly.Memory({initial:Math.ceil(attributes.normals.length/64/1024),maximum:Math.ceil(volume*6*6*3/2/64/1024)});
    positionView=new Uint16Array(positionMemory.buffer);
    uvView=new Float32Array(uvMemory.buffer);
    normalView=new Int8Array(normalMemory.buffer);
    positionView.set(attributes.position);
    uvView.set(attributes.uv);
    normalView.set(attributes.normals);
    */
    normalView=new Int8Array(attributes.normals);
    positionView=new Uint16Array(attributes.position);
    for(let i=0;i<positionView.length;i++){
        positionView[i]*=blockSize;
    }
    uvView=new Float32Array(attributes.uv);
    vertexAttribute=new THREE.BufferAttribute(positionView,3,0);
    uvAttribute=new THREE.BufferAttribute(uvView,2,0)
    normalAttribute=new THREE.BufferAttribute(normalView,3,0);
    blocksGeometry.deleteAttribute('uv');
    blocksGeometry.deleteAttribute('position');
    blocksGeometry.deleteAttribute('normal');
    blocksGeometry.setAttribute('uv',uvAttribute);
    blocksGeometry.setAttribute('normal',normalAttribute);
    blocksGeometry.setAttribute('position',vertexAttribute);
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