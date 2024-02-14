// Two Sum II - Input Array Is Sorted

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let start = 0
  let end = numbers.length -1;

  while(end>start){
      if(numbers[start]+ numbers[end] > target){
          end--;
      }
      else if(numbers[start]+ numbers[end] < target){
          start++;
      }
      else{
          break;
      }
  }

  return [start+1, end+1]
};
