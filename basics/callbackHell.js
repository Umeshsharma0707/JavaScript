function getData(id,getNewData){
    return new Promise((resolve,reject)=>{
     setTimeout(()=>{
         console.log("data : ",id);
         resolve("success");
         if(getNewData){
             getNewData();
         }
     },1000);   
    });
 }
 
 getData(2,()=>{
     getData(3,()=>{
         getData(4);
     });
 });