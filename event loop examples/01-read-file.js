const {readFile} = require('fs')

console.log('start first task')

readFile('folder/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(result)
    console.log('completed first task')
})

console.log('next task')

