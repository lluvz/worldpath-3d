//raycast
const raycaster=new THREE.Raycaster();
//blocks
let lineGeometry=new THREE.BufferGeometry();
let linePosition=new Uint16Array([50,100,50,100,100,50,100,100,100,50,100,100]);
lineGeometry.setAttribute('position',new THREE.BufferAttribute(linePosition,3,false));
let lineMaterial=new THREE.LineBasicMaterial({color:new THREE.Color(0xaaaaaa)});
let blockLine=new THREE.LineLoop(lineGeometry,lineMaterial);
scene.add(blockLine);

let pointingX,pointingY,pointingZ,pointingIndex;
let pxo=new Uint16Array(3),pyo=new Uint16Array(3),pzo=new Uint16Array(3);
let px=new Uint16Array(2),py=new Uint16Array(2),pz=new Uint16Array(2);
/*
const pointer=new THREE.Vector2();
let intersects;
window.addEventListener('pointermove',function(e){
    pointer.x=(e.clientX/window.innerWidth)*2-1;
    pointer.y=-(e.clientY/window.innerHeight)*2+1;
});
window.addEventListener('pointerdown',function(e){
    pointer.x=(e.clientX/window.innerWidth)*2-1;
    pointer.y=-(e.clientY/window.innerHeight)*2+1;
});
*/

function raycast(){
    raycaster.setFromCamera({x:0,y:0},camera);
    intersects=raycaster.intersectObject(blocksMesh);
    if(intersects[0]!=null){
        //show the block pointed at
        let face=intersects[0].face;
        let index=face.a*3;
        pxo[0]=chunkAttribute.vertex[index];pxo[1]=chunkAttribute.vertex[index+3];pxo[2]=chunkAttribute.vertex[index+6];
        pyo[0]=chunkAttribute.vertex[index+1];pyo[1]=chunkAttribute.vertex[index+4];pyo[2]=chunkAttribute.vertex[index+7];
        pzo[0]=chunkAttribute.vertex[index+2];pzo[1]=chunkAttribute.vertex[index+5];pzo[2]=chunkAttribute.vertex[index+8];
        if(pxo[0]==pxo[1]&&pxo[0]==pxo[2]){
            find2(pyo,py);find2(pzo,pz);
            for(let i=0;i<12;i+=3){
                linePosition[i]=pxo[0];
                linePosition[i+1]=py[Math.floor((i+3)/6)%2];
                linePosition[i+2]=pz[Math.floor(i/6)%2];
            }
        }
        else if(pyo[0]==pyo[1]&&pyo[0]==pyo[2]){
            find2(pxo,px);find2(pzo,pz);
            for(let i=0;i<12;i+=3){
                linePosition[i]=px[Math.floor(i/6)%2];
                linePosition[i+1]=pyo[0];
                linePosition[i+2]=pz[Math.floor((i+3)/6)%2];
            }
        }
        else{
            find2(pxo,px);find2(pyo,py);
            for(let i=0;i<12;i+=3){
                linePosition[i]=px[Math.floor(i/6)%2];
                linePosition[i+1]=py[Math.floor((i+3)/6)%2];
                linePosition[i+2]=pzo[0];
            }
        }
        lineGeometry.attributes.position.needsUpdate=true;
        //get index of the block pointed at
        if(face.normal.x=-1){
            if(face.a%6<3){
                pointingX=chunkAttribute.vertex[index]/blockSize;
                pointingY=chunkAttribute.vertex[index+1]/blockSize;
                pointingZ=chunkAttribute.vertex[index+2]/blockSize;
            }
            else{
                pointingX=chunkAttribute.vertex[index]/blockSize;
                pointingY=chunkAttribute.vertex[index+1]/blockSize-1;
                pointingZ=chunkAttribute.vertex[index+2]/blockSize;
    
            }
        }
        else if(face.normal.x=1){
            if(face.a%6<3){
                pointingX=chunkAttribute.vertex[index]/blockSize-1;
                pointingY=chunkAttribute.vertex[index+1]/blockSize;
                pointingZ=chunkAttribute.vertex[index+2]/blockSize-1;
                
            }
            else{
                pointingX=chunkAttribute.vertex[index]/blockSize-1;
                pointingY=chunkAttribute.vertex[index+1]/blockSize-1;
                pointingZ=chunkAttribute.vertex[index+2]/blockSize-1;
            }
        }
        else if(face.normal.y=-1){
            if(face.a%6<3){
                pointingX=chunkAttribute.vertex[index]/blockSize;
                pointingY=chunkAttribute.vertex[index+1]/blockSize;
                pointingZ=chunkAttribute.vertex[index+2]/blockSize;
            }
            else{
                pointingX=chunkAttribute.vertex[index]/blockSize-1;
                pointingY=chunkAttribute.vertex[index+1]/blockSize;
                pointingZ=chunkAttribute.vertex[index+2]/blockSize-1;
            }
        }
        else if(face.normal.y=1){
            if(face.a%6<3){
                pointingX=chunkAttribute.vertex[index]/blockSize;
                pointingY=chunkAttribute.vertex[index+1]/blockSize-1;
                pointingZ=chunkAttribute.vertex[index+2]/blockSize-1;
            }
            else{
                pointingX=chunkAttribute.vertex[index]/blockSize;
                pointingY=chunkAttribute.vertex[index+1]/blockSize-1;
                pointingZ=chunkAttribute.vertex[index+2]/blockSize;
            }
        }
        else if(face.normal.z=-1){
            if(face.a%6<3){
                pointingX=chunkAttribute.vertex[index]/blockSize-1;
                pointingY=chunkAttribute.vertex[index+1]/blockSize;
                pointingZ=chunkAttribute.vertex[index+2]/blockSize;
            }
            else{
                pointingX=chunkAttribute.vertex[index]/blockSize-1;
                pointingY=chunkAttribute.vertex[index+1]/blockSize-1;
                pointingZ=chunkAttribute.vertex[index+2]/blockSize;
            }
        }
        else if(face.normal.z=1){
            if(face.a%6<3){
                pointingX=chunkAttribute.vertex[index]/blockSize;
                pointingY=chunkAttribute.vertex[index+1]/blockSize;
                pointingZ=chunkAttribute.vertex[index+2]/blockSize-1;
            }
            else{
                pointingX=chunkAttribute.vertex[index]/blockSize;
                pointingY=chunkAttribute.vertex[index+1]/blockSize-1;
                pointingZ=chunkAttribute.vertex[index+2]/blockSize-1;
            }
        }
        pointingIndex=pointingX+pointingY*area+pointingZ*cacheX;
    }
}
function find2(array,result){
    if(array[0]!=array[1]){
        result[0]=array[0];result[1]=array[1];
    }
    else if(array[0]!=array[2]){
        result[0]=array[0];result[1]=array[2];
    }
    else{
        result[0]=array[1];result[1]=array[2];
    }
}
//mouse rotating the view
let mouseSpeed=0.001;
renderer.domElement.addEventListener('mousedown',function(){
    if(document.pointerLockElement==null){
        renderer.domElement.requestPointerLock();
        //destroy block
    }
})
renderer.domElement.addEventListener('mousemove',function(e){
    if(document.pointerLockElement!==null){
        camera.rotation.y -= e.movementX*mouseSpeed;
        camera.rotation.x -= e.movementY*mouseSpeed;
        if(camera.rotation.x>Math.PI*0.5){
            camera.rotation.x=Math.PI*0.5;
        }
        else if(camera.rotation.x<-Math.PI*0.5){
            camera.rotation.x=-Math.PI*0.5;
        }
    }
})