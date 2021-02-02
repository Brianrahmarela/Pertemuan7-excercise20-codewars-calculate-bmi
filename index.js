function bmi(weight, height) {

  let total = weight/(height**2);
  // console.log(total);

  if( total <= 18.5) {
    return "Underweight";
  } else if ( total <= 25.0){
    return "Normal";
  } else if ( total <= 30.0){
    return "Overweight";
  } else if ( total > 30){
    return "Obese";
  }
}
// bmi(63,170)
console.log(bmi(63,170));