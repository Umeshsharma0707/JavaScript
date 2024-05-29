
function data(num){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(num);
            resolve("success");
        },2000);
    })
}

(async function (){
    console.log("getiing data 1...")
    await data(1);
    console.log("getiing data 2...")

    await data(2);
})();
