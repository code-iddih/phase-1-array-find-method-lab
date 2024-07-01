// code your solution here

// Case 1 - When there is a WIN in the Record

const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    // more years and results...
  ];
  
  function superbowlWin(records) {
    const winningRecord = records.find(record => record.result === "W");
    return winningRecord ? winningRecord.year : undefined;
  }
  
  // Example
  console.log(superbowlWin(record)); // Running the example will give an Output: "2015"

  // Case 2 - When there is NO WIN in the Record

//   const record = [
//     { year: "2015", result: "L"},
//     { year: "2014", result: "N/A"},
//     { year: "2013", result: "L"},
//     // more years and results...
//   ];
  
//   function superbowlWin(records) {
//     const winningRecord = records.find(record => record.result === "W");
//     return winningRecord ? winningRecord.year : undefined;
//   }
  
//   // Example
//   console.log(superbowlWin(record)); // Running the example will give an Output: "Undefined"



// NB: if you want to check for Case 2, comment case 1 and Uncomment Case 2.



  