var numArray = [2, 43, 64, 1234, 345];
var size = numArray.length;
var total = 0;
console.log(numArray);
for (var i = 0; i < size; i++) {
    total = total + numArray[i];
}
var avg = total / size;
console.log("Average " + avg);
