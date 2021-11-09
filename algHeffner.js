let a = "010";
let keya = "110";
let aencr = addmod2(a, keya);
let xa = Number.parseInt(keya, 2);
xa=rsaencrypt(xa);
let xb=rsadecrypt(xa);
let keyb = xb.toString(2);
let b = addmod2(aencr, keyb);
console.log("сообщение отправителя: " + a);
console.log("ключ отправителя: " + keya);
console.log("зашифрованное сообщение отправителя: " + aencr);
console.log("ключ получателя: " + keyb);
console.log("сообщение получателя: " + b);

function addmod2(a, key){
    let c = "";
    for (let i = 0; i < a.length; i++){
    let d = ((Number)(a[i]) + (Number)(key[i])) % 2;
    if (d == 1){
    c = c + "1";
    }
    else
    c = c + "0";
    }
    return c;
}

function rsaencrypt(key){
    let x = 61, y = 53;
    let n = x * y;
    let phi = (x - 1) * (y - 1);
    let e = 17;
    let nkey = Math.pow(key, e);
    nkey = nkey % n;
    return nkey;
}

function rsadecrypt(key){
    let x = 61, y = 53;
    let f = (x - 1) * (y - 1);
    let n = x * y;
    let d = 2753;
    let nkey = (BigInt(key) ** BigInt(d)) % BigInt(n);
    return nkey;
}

function iscoprime(a, b){
    for (let i = 2; i < a; i++){
        if ((a % i == 0) && (b % i == 0)){
            return false;
        }
    }
    return true;
}

function issimple(a){
    for (let i = 2; i < a; i++){
        if (a % i == 0){
            return false;
        }
    }
    return true;
}