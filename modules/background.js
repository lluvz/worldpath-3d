//pixi background
//setup
let pixiApp=new PIXI.Application({
    width:w,
    height:h,
})
pixiApp.resizeTo=window;
bgSrc.pureColor.width=pixiApp.view.width;
bgSrc.pureColor.height=pixiApp.view.height;
bgSrc.gradient.width=pixiApp.view.width;
bgSrc.gradient.height=pixiApp.view.height;
bgSrc.pureColor.tint='0x000011';
bgSrc.gradient.tint='0xff7700';
pixiApp.stage.addChild(bgSrc.pureColor);
pixiApp.stage.addChild(bgSrc.gradient);

//let pixi canvas to be the background texture
let background=new THREE.CanvasTexture(pixiApp.view);
scene.background=background;
//test
//animations
function aniBackground(){
    background.needsUpdate=true;
}