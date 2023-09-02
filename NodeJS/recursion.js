function SeriesUSingRecursion(i) {
    if (i > 5) return;
    console.log(i);
    SeriesUSingRecursion(i + 1);
  }
  
 SeriesUSingRecursion(1);
  
console.log("-----------------------------------");

  function ReverseSeriesUSingRecursion(i) {
    if (i < 1) return;
    console.log(i);
    ReverseSeriesUSingRecursion(i - 1);
  }
  
 ReverseSeriesUSingRecursion(5);