//The engine uses soft rasterization built in the fragment shader to render the view directly from an array that contains the type of each block.

class WebglEngine{
    constructor(){
        this.canvas=document.createElement('canvas');
        this.gl=this.canvas.getContext('webgl2');
        this.renderW=8;
        this.renderH=128;
        this.renderA=this.renderW*this.renderW;

        //shaders and program
        this.vertexShaderSourse=
`attribute vec2 screen;
void main(){
    gl_Position=vec4(screen,0.0,1.0);
}`
        this.fragmentShaderSourse=
`void main(){
    gl_FragColor=vec4(0.5,1.0,1.0,1.0);
}`
        this.vertexShader=this.compileShader(this.vertexShaderSourse,this.gl.VERTEX_SHADER);
        this.fragmentShader=this.compileShader(this.fragmentShaderSourse,this.gl.FRAGMENT_SHADER);
        this.program=this.createProgram(this.vertexShader,this.fragmentShader);

        //A square that cover the screen
        this.screenVertex=new Float32Array([-1.0,-1.0,1.0,-1.0,1.0,1.0,-1.0,1.0]);
        this.screenVertexBuffer=this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.screenVertexBuffer);
        this.gl.bufferData(this.gl.ARRAY_BUFFER,this.screenVertex,this.gl.STATIC_DRAW,0);
        this.screenAttrib=this.gl.getAttribLocation(this.program,'screen');
        this.gl.vertexAttribPointer(this.screenAttrib,2,this.gl.FLOAT,false,8,0);
        this.gl.enableVertexAttribArray(this.screenAttrib);

        //block type texture
        this.blockTextureBuffer=new ArrayBuffer(this.renderA*this.renderH*2);
        this.blockTextureView=new Uint16Array(this.blockTextureBuffer);
    }
    initBlockTypes(){
        let blockTypeBuffer=new ArrayBuffer(volume*2);
        let blockTypes=new Uint16Array(blockTypeBuffer);
        for(let x=0;x<this.renderW;x++){
            for(let y=0;y<this.renderH;y++){
                for(let z=0;z<this.renderW;z++){
                    if(y<16){
                        blockTypes[y*this.renderA+z*this.renderW+x]=1;
                    }
                    else{
                        blockTypes[y*this.renderA+z*this.renderW+x]=0;
                    }
                }
            }
        }
        return blockTypes;
    }
    render(){
        this.gl.drawArrays(this.gl.TRIANGLE_FAN,0,8)
    }
    compileShader(source,type){//type:gl.VERTEX_SHADER||gl.FRAGMENT_SHADER
        let shader=this.gl.createShader(type);
        this.gl.shaderSource(shader,source);
        this.gl.compileShader(shader);
        if(!this.gl.getShaderParameter(shader,this.gl.COMPILE_STATUS)){
            console.error('compiling shader failed:\n'+this.gl.getShaderInfoLog(shader))
        }
        return shader;
    }
    createProgram(vertexShader,fragmentShader){
        let program=this.gl.createProgram();
        if(vertexShader!=null){
            this.gl.attachShader(program,vertexShader);
        }
        if(fragmentShader!=null){
            this.gl.attachShader(program,fragmentShader);
        }
        this.gl.linkProgram(program);
        this.gl.useProgram(program);
        return program;
    }
}