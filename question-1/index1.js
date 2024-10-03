

function lowerCaseWords(mixed_arraysB)
{
    let MyNewArray =[]

    return new Promise((resolve,reject) => 
        {
                for(const element of mixed_arraysB)
                    {
                    if(typeof element == "string") {MyNewArray.push(element.toLowerCase())}
                    }
                resolve(MyNewArray);
        })
}   


const mixedArray = ['PIZZA',10,,true,25,false,'Wings']

lowerCaseWords(mixedArray).then((data)=>console.log(data))