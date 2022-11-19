//setup
let viewDistance=3000;
let scene=new THREE.Scene();
let camera=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,viewDistance+3);
camera.rotation.order='YXZ'
let renderer=new THREE.WebGLRenderer({antialias:true});
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);
//post-processing

let composer=new EffectComposer(renderer);
let renderPass=new RenderPass(scene,camera);
composer.addPass(renderPass);
let bloomPass=new THREE.UnrealBloomPass({x:window.innerWidth,y:window.innerHeight},1)
composer.addPass(bloomPass)


//test

const geometry = new THREE.BoxGeometry( 70, 70, 70 );
const material = new THREE.MeshStandardMaterial( { color: 0xffffff} );
const cube = new THREE.Mesh( geometry, material );
cube.castShadow=cube.receiveShadow=true;
scene.add( cube );
cube.position.x=90;
cube.position.y=0;

//3d texture test
//let plane=new THREE.PlaneGeometry(30,30);


//size adjustment
window.onresize=function(){
    renderer.setSize(window.innerWidth,window.innerHeight);
    bloomPass.setSize(window.innerWidth,window.innerHeight);
    camera.aspect=window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();
}