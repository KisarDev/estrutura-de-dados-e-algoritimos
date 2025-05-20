/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 function somaValida(n1,n2, target) {
    if(n1 + n2 !== target ) {
        return false
    }
    return true
 }
var twoSum = function(nums, target) {
    let n1 = 0;
    let n2 = 0;
    for(let i = 0; i<=nums.length - 1; i++ ) {
        n1 = nums[i]
        n2 = nums[i+1]
        if (somaValida(n1,n2,target)) {
            return [i, i+1]
        }
        for(let j = i+1; j<=nums.length - 1; j++ ) {
            n2 = nums[j]
            if (somaValida(n1,n2,target)) {
                return [i, j]
            }
        }
    }
};


console.log(twoSum([3,2,3], 6)) // [0,2]