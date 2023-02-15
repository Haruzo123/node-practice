const path = require('path')

console.log(path.sep)


//dzojnuje ih u path (slican kurac ko obican .join())
const filePath = path.join('/content/','subfolder','test.txt')

console.log(filePath)


//samo poslednji deo patha ti da (test.txt u ovom slucaju)
const base = path.basename(filePath)
console.log(base)


//__dirname i __filename su korisni
//.resolve ti daje apsolutni path, tj uradi slicno sto i join
// pogledati https://stackoverflow.com/questions/35048686/whats-the-difference-between-path-resolve-and-path-join#:~:text=resolve()%20method%20resolves%20a,then%20normalizes%20the%20resulting%20path.
const absolute = path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolute)