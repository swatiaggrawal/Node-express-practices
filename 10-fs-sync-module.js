//fs module
const {readFileSync, writeFileSync} =require('fs')

const first =readFileSync('./folder/first.txt','utf8')
const second =readFileSync('./folder/second.txt','utf8')

console.log(first,second)

writeFileSync(
    './folder/result-sync.txt',
    `Here is the result: ${first} , ${second}`,
    {flag:'a'}
)

