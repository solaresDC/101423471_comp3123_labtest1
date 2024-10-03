const fs = require('fs');
const path = require('path');



try{
    fs.mkdirSync(path.join(__dirname, 'Logs')); 


    for (let fileNum = 0; fileNum < 10; fileNum++) {
        const fileName = path.join(__dirname,'Logs',`log${fileNum}.txt`);
        fs.writeFileSync(fileName, '');
        console.log(fileName);  
    }
}catch(error){
        console.log(error)
}



