// path je za pravljenje patha, fs je za koriscenje patha u svrhu koriscenja
// tih foldera i slicno
//sinhrono sve ovde
const {readFileSync, writeFileSync} = require('fs')
console.log('start')
const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

//ovo a je za apend, dodaje vrednosti u postojeci fajl
writeFileSync('./content/result-sync.txt',`asdasdas`, {flag: 'a'})

console.log(typeof first)
console.log(second)

console.log('done')

console.log('next')