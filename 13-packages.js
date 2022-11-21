//npm - global command

//local dependency - use only in a particular project
//npm i <packageName>

//global dependancy - use in any project
//npm install -g <packageName>

//package,json - manifest file(store important info about project/package)
//manual approach (create package.json in the rrot,create prperties etc.)
//npm init (step by step, press enter to skip)
// npm init -y(everything default)


//"dev": "nodemon app.js"

const _ = require('lodash')
const items =[1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)
console.log("hello ")