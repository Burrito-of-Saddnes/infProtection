let privateKeyAlice = Math.round(1+Math.random()*(100))
let privateKeyBob = Math.round(1+Math.random()*(100))
console.log("Приватный ключ для Алисы ", privateKeyAlice)
console.log("Приватный ключ для Боба ", privateKeyBob)

let publicKeyAlice = (BigInt(9)**BigInt(privateKeyAlice)) % BigInt(23)
let publicKeyBob = (BigInt(9)**BigInt(privateKeyBob)) % BigInt(23)
console.log("Публичный ключ для Алисы ", publicKeyAlice)
console.log("Публичный ключ для Боба ", publicKeyBob)

let commonKeyAlice = (publicKeyBob**BigInt(privateKeyAlice)) % BigInt(23)
let commonKeyBob = (publicKeyAlice**BigInt(privateKeyBob)) % BigInt(23)
console.log("Общий ключ для Алисы ", commonKeyAlice)
console.log("Общий ключ для Боба ", commonKeyBob)