

function lowerCaseWords(mixed_arraysB)
{
    let MyNewArray =[]

    return new Promise((resolve,reject) => 
        {
        setTimeout(()=>
            {
                for(const element of mixed_arraysB)
                    {
                    if(typeof element == "string") {MyNewArray.push(element.toLowerCase())}
                    }
                console.log(MyNewArray)

                resolve("succes");
            });
        })
}


const mixedArray = ['PIZZA',10,,true,25,false,'Wings']

lowerCaseWords(mixedArray)