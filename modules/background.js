//materials setup
let bgMaterials={};
bgMaterials.back=new THREE.SpriteMaterial({map:bgSrc.test});
//object settings
let bgObjects={};
bgObjects.back=new THREE.Sprite(bgMaterials.back);
bgObjects.back.scale.set(w,h,0);
scene.add(bgObjects.back);
//animations
function aniBackground(){
    
}