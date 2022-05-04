let arr1 = [1, 2, 3, 4, 5]; //Static Input 1
let arr2 = [100, 2, 1, 10]; //Static Input 2
let resultArr = arr1;

for(let i=0;i<arr2.length;i++){
    element = arr2[i];
    let flag = true;
    for(let j=0;j<arr1.length;j++){
        if(arr1[j]==element){
            flag = false;
            break;
        }
    }
    if(flag){
        resultArr.push(element);
    }
}
for(let i=0;i<resultArr.length;i++){
    console.log(resultArr[i]);
}

