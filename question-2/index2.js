const delayedSucces =()=>{
    setTimeout(()=>{
        let success = {'message':'delayed success!'}
        console.log(success);
    },500)
}

const delayedExecption =()=>{
setTimeout(()=>{
   try{
    throw new Error('error: delayed excpetion!');
   } catch (e){
    console.error(e);
   }
},500)
}

//delayedSucces()
//delayedExecption()



function resolvedPromise(){
return new Promise( (resolve,reject) =>{
    setTimeout(()=>{
        let success = {'message':'delayed success!'}
        resolve(success);
    },500)
})
}

function rejectedPromise(){
return new Promise((resolve,reject)=>{
setTimeout(()=>{
    try{
     let error = {'error':'delayed excpetion!'}
     reject(error)

    } catch (e){
     console.error(e);
    }
 },500)
})
}
resolvedPromise().then((data)=>console.log(data))
rejectedPromise().then().catch((data)=> console.log(data))
