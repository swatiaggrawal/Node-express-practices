//fs module
const {readFile, writeFile} =require('fs')


readFile('./folder/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return;
    }
    const first = result;
    readFile('./folder/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        const second = result
        writeFile(
            './folder/result-async.txt',
            `Here is the result: ${first} , ${second}`,
            (err,result)=>{
            if(err){
                console.log(err)
                return
            }
            console.log(result)
            }
        )
    })
})

