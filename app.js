//====Returning Anonymous Function 

function sum (a){
    return function(b){
        return a+b;
    }
}
document.write(sum(10));
let preSum = sum(10);
document.write(preSum(30));