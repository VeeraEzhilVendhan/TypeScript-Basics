let numArray: number[]=[2,43,64,1234,345];

let size: number=numArray.length;
let total: number=0;

console.log(numArray);

for(let i:number=0;i<size;i++){
    total=total+numArray[i];
}

let avg: number=total/size;

console.log("Average "+avg);


