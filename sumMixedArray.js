/*
Given an array of integers as strings and numbers, 
return the sum of the array values as if all were numbers.

Return your answer as a number.

*/

function sumMix(x){
   let j = 0;
  for (let i = 0; i<x.length; i++){
    if (typeof x[i] != 'number'){
     x[i] =  Number(x[i])
    }
      j += x[i] 
  }  
 return j
 }

 


