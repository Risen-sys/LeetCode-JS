/* Matthew Silbernagel*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const result = [];
    for(let i=0;i<nums.length;i++){
        if(nums.indexOf(target-nums[i]) !== -1 && nums.indexOf(target-nums[i]) !== i){
            result.push(i);
            result.push(nums.indexOf(target-nums[i]));
            break;
        }
    }
    return result;
};
