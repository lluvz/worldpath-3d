let width=128;
let height=128;
let depth=4;
let TKernal=new GPU('webgl2');
let Tinitgradient=TKernal.createKernel(function(w,h,d){
    const x=Math.floor(this.thread.x/(h*d));
    const y=Math.floor(this.thread.x%(h*d)/d);
    const z=this.thread.x%(h*d)%d;
    const l=Math.sqrt(w*w+h*h+d*d);
    const percentage=(w*x+h*y+d*z)/(l*l);
    return 255*percentage;
}).setOutput([width*height*depth]);
