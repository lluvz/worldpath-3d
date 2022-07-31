//setup
let scene=new THREE.Scene();
let camera=new THREE.PerspectiveCamera(75,w/h,0.1,1000);
let renderer=new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);
//test
const geometry = new THREE.BoxGeometry( 70, 70, 70 );
const material = new THREE.MeshBasicMaterial( { color: 0xffaa00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );
cube.position.z=0;

camera.position.z=777;
camera.position.y=230;
