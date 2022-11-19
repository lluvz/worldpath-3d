let a=new WebAssembly.Memory({initial:1,maximum:16*1024});
let b=new Int8Array(a.buffer);
let cursor=0;
function reduce(l){
    console.time();
    console.timeEnd('Reduce time:');
}
function grow(){
    console.time();
    a.grow(1);
    b=new Int8Array(a.buffer);
    console.timeEnd('Grow time:');
}
function increase(l){
    let end=cursor+l;
    for(;cursor<end;cursor++){
        if(cursor%(64*1024)==64*1024-1){
            grow();
        }
        b[cursor]=7;
    }
}