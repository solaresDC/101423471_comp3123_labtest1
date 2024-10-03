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
return new Promise( () =>{
    setTimeout(()=>{
        let success = {'message':'delayed success!'}
        console.log(success);
    },500)
})
}

function rejectedPromise(){
return new Promise(()=>{
setTimeout(()=>{
    try{
     let error = {'error':'delayed excpetion!'}
     console.log(error)

    } catch (e){
     console.error(e);
    }
 },500)
})
}
resolvedPromise()
rejectedPromise()
