function decimalToBinary(a){
    let num = a;
    let bArr = [];  //Binary array
    while(num != 0){
        let rem = num%2;
        num = Math.floor(num/2);
        bArr.push(rem);
    }
    return bArr;
}
let binaryDigit = decimalToBinary(5);
for(let i=0;i<binaryDigit.length;i++){
    console.log(binaryDigit[i]);
}