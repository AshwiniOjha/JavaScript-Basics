let a;
a="Hello World";
console.log(a);

a=10;
console.log("Value Of A : ",a);
console.log(5/2);

for(let i=1;i<=10;i++){
    console.log(i);
}


for(let i=1;i<=10;i++){
    if(i%2==0){
        console.log(i);
    }
}

function fnWithParameter(a, b){
    console.log("returnValue");
}
fnWithParameter(10, 20);
fnWithParameter("Hello", 20);
