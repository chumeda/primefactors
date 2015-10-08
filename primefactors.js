/*exported projectEulerThree */
/**
 * a function to compute the largest prime factor of the given number
 * @param number- input number to calculate the largest prime factor
 * @returns {number} returns the largest prime factor
 */
function projectEulerThree(number) {
  var largestFactor = 0;
  var divideby = 2;
  while (number >1) {
    if (number%divideby ===0) {
      largestFactor = divideby;
      number/=divideby;
    }
    divideby++;
  }
  //console.log(largestFactor);
  return largestFactor;
}
//projectEulerThree(600851475143);
