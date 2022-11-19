//random map creation
let rW=1920,rH=1080,rA=rW*rH;
let rcW,rcH;
let xScale,yScale;
let randomMap=new Float32Array(rA);
for(let i=0;i<rA;i++){
    randomMap[i]=Math.random();
}
//create the canvas2d to draw
let photoCanvas=document.createElement('canvas');
photoCanvas.onclick=function(){
    photoCanvas.style.display='none';
}
//document.body.appendChild(photoCanvas);
photoCanvas.style.position='fixed';
let photoPainter=photoCanvas.getContext('2d',{willReadFrequently:true});
function initPainter(xs,ys){
    xScale=xs,yScale=ys;
    rcW=xs*rW,rcH=ys*rH;
    photoCanvas.width=rcW;
    photoCanvas.height=rcH;
}
//Draw stars
initPainter(4,4);
photoPainter.fillRect(0,0,rcW,rcH);
for(let j=1;j<rH-1;j++){
    photoPainter.save();
    photoPainter.scale(1/Math.sin(j/rH*Math.PI),1);
    for(let i=0;i<rW;i++){
        if(randomMap[rH*j+i]<0.02){
            let r=randomMap[rH*j+i]*300;
            let gradient=photoPainter.createRadialGradient(i*xScale,j*yScale,0.3*r,i*xScale,j*yScale,r);
            red=randomMap[rH*j+i+1];green=randomMap[rH*j+i+2];blue=randomMap[rH*j+i+3];
            gradient.addColorStop(0, "white");
            gradient.addColorStop(0.5, "rgba("+(red*255).toFixed(2)+','+(green*255).toFixed(2)+','+(blue*255).toFixed(2)+',0)');
            gradient.addColorStop(1, "rgba(0,0,0,0)");
            photoPainter.fillStyle=gradient;
            photoPainter.fillRect(i*xScale-r,j*yScale-r,2*r,2*r);
        }
    }
    photoPainter.restore();
}
let starsTexture=new THREE.DataTexture(photoPainter.getImageData(0,0,rcW,rcH).data,rcW,rcH);
starsTexture.needsUpdate=true;
starsTexture.mapping=303;
starsTexture.magFilter=THREE.NearestFilter;
starsTexture.minFilter=THREE.LinearFilter;
//Draw sun
{
initPainter(1/16,1/9);
photoPainter.save();
photoPainter.fillStyle='rgba(0,0,0,0)';
photoPainter.fillRect(0,0,rcW,rcH);
let gradient=photoPainter.createRadialGradient(rcW/2,rcH/2,rcW/3,rcW/2,rcH/2,rcW/2);
gradient.addColorStop(0,'white');
gradient.addColorStop(0.7,'rgba(1,1,1,0)');
gradient.addColorStop(1,'rgba(1,1,1,0)');
photoPainter.fillStyle=gradient;
photoPainter.fillRect(0,0,rcW,rcH);
photoPainter.restore();
}
let sunTexture=new THREE.DataTexture(photoPainter.getImageData(0,0,rcW,rcH).data,rcW,rcH);
sunTexture.needsUpdate=true;
//Draw morning and evening glow
{
initPainter(3/8,1/3);
photoPainter.save();
photoPainter.fillStyle='rgba(0,0,0,0)';
photoPainter.fillRect(0,0,rcW,rcH);
let gradient=photoPainter.createRadialGradient(rcW/2,rcH/2,rcW/3,rcW/2,rcH/2,rcW/2);
gradient.addColorStop(0,'white');
gradient.addColorStop(0.7,'rgba(1,1,1,0)');
gradient.addColorStop(1,'rgba(1,1,1,0)');
photoPainter.fillStyle=gradient;
photoPainter.fillRect(0,0,rcW,rcH);
photoPainter.restore();
}