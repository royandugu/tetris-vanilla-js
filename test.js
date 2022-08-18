const a=()=>{
    b();
}
const b=()=>{
    c();
}
const c=(condition)=>{
    if(condition){
        a();
        return;
    }
    else{
        c();
    }
}