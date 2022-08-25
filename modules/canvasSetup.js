//setup
let scene=new THREE.Scene();
let camera=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,3000);
let renderer=new THREE.WebGLRenderer({antialias:true});
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.domElement.oncontextmenu=function(e){
    e.preventDefault();
}
//post-processing
/*
let composer=new EffectComposer(renderer);
let renderPass=new RenderPass(scene,camera);
composer.addPass(renderPass);
let bloomPass=new THREE.UnrealBloomPass({x:window.innerWidth,y:window.innerHeight},0.39)
composer.addPass(bloomPass)
*/

//test

const geometry = new THREE.BoxGeometry( 70, 70, 70 );
const material = new THREE.MeshStandardMaterial( { color: 0xffffff} );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z=777;
camera.position.y=230;

//size adjustment
window.onresize=function(){
    renderer.setSize(window.innerWidth,window.innerHeight);
    //bloomPass.setSize(window.innerWidth,window.innerHeight);
    camera.aspect=window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();
}
