//raycast
const raycaster=new THREE.Raycaster();
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
function raycast(){
    raycaster.setFromCamera(pointer,camera);
    if(intersects!=null){
        for(let i=0;i<intersects.length;i++){
            intersects[i].object.material.color.set(0xffffff);
        }
    }
    intersects=raycaster.intersectObjects(scene.children);
    if(intersects[0]!=null){
        intersects[0].object.material.color.set(0xff0000);
    }
}

//mouse rotating the view
let mouseSpeed=0.001;
renderer.domElement.addEventListener('mousedown',function(){
    renderer.domElement.requestPointerLock();
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