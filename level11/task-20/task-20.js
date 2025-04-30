function operateOnArray(arr, func) {
    return arr.map(func);
  }
  
  let double = x => x * 2;
  let square = x => x ** 2;
  let toString = x => x.toString();
  
  let nums = [1, 2, 3, 4];
  
  console.log("Double:", operateOnArray(nums, double));
  console.log("Square:", operateOnArray(nums, square));
  console.log("To String:", operateOnArray(nums, toString));
  