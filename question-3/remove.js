const fs = require('fs');
const path = require('path');


try{
    const files = fs.readdirSync(path.join(__dirname, 'Logs'));



    files.forEach(file => {
        const filePath = path.join(__dirname, 'Logs', file);
        fs.unlinkSync(filePath);  
        console.log(`delete files...${file}`);  
    });
    
    
    fs.rmdirSync(path.join(__dirname, 'Logs'));

}catch(error){
    console.log(error)
}
