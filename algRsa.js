const p = 23
const q = 17
let word = "какое-то слово"
// let word = "some word"
const alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя"
// const alphabet = "abcdefghijklmnopqrstuvwxyz"
let m = p * q
let f = (p - 1) * (q - 1) 
let e

function isCoprime (a, b) {
    while (a != 0 && b != 0){
    if (a > b)
        a = a % b
    else
        b = b % a
    }
    return (a + b)
}

for(e = 2; e < f; e++){
    if(isCoprime(f ,e) == 1){
        break;
    }
}
    
console.log(`openKey = [`,e,',',m,']')

let d = 1

while(true){
    if((d * e) % f == 1){
        if(d == e ) d++
        else break
    }else{
        d++
    }
}

console.log('closedKey = [',d,',',m,']')

word = word.split("")

let wordNumber = word.map((value) => alphabet.indexOf(value) + 1)
console.log('WordNumber = ', wordNumber)

let encryptedWord = wordNumber.map((value) => ((value) ** e) % m)
console.log('encrypterWord = ', encryptedWord)

let decryptedWord =[]

for(i = 0; i < encryptedWord.length; i++){
    decryptedWord[i]=(BigInt(encryptedWord[i]) ** BigInt(d)) % BigInt(m)
}

console.log('decryptedWord = ', decryptedWord)