var ipt=document.getElementById("ipt");
function AddCount(a){
    ipt.value+=a;
}
function result(){
    ipt.value=eval(ipt.value);
}
function clert(){
    ipt.value="";
}
function tui(){
    ipt.value=ipt.value.slice(0,ipt.value.length-1);
}