function add(a, b) {
    return a + b;
}
const log={
    warning:()=>{
        console.log("warning");
    },
    error:()=>{
        console.log("error");
    }
}
module.exports={add,log}