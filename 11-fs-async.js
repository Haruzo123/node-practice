// path je za pravljenje patha, fs je za koriscenje patha u svrhu koriscenja
// tih foldera i slicno
//asinhrono 
const {readFile, writeFile} = require('fs')
console.log('start')


readFile('./content/first.txt','utf8',(err,result) =>{
if(err){
    console.log(err)
    return
}
    const first = result
    writeFile('./content/second.txt', 'kurcina', {flag: 'a'},(err, result) =>{
        if(err){
            console.log(err)
            return
        }
        console.log('async')

    })
})

console.log('done')