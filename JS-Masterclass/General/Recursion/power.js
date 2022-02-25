/**
Write a function which accepts a base an an exponent.  It should return the result of raising the base to that exponent.
power(2,4) //16
power(3,2) //9
power(3,3) //27

*/

function power(base, exponent){
  if(exponent === 0) return 1;
  return base * power(base,exponent-1);
}
