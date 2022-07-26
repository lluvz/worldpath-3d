function animate(){
    requestAnimationFrame(animate);
    aniBackground();
    aniBlocks();
    renderer.render(scene,camera);
}
animate();