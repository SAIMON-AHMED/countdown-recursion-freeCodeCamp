function countdown(n){
  if (n < 0) {  // base condition
    return [];
  } else {
    const countArray = countdown(n - 1);  // recursive call
    countArray.unshift(n);
    return countArray;
  }
}
