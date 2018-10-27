module.exports = function sumOfOther(arr) {
    let sum = arr.reduce((p,c)=>p+c);
    return arr.map((v)=>sum-v);
}