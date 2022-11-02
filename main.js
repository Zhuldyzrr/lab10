let lab1 = [5, 5, 0, 0, 5, 0, 10]
let lab2 = [5, 5, 5, 5, 5, 5, 10]
let lab3 = [5, 10, 10, 15]
let lab4_5 = [10, 5, 5, 5, 5, 5, 10, 10, 10, 10, 5]
let lab6 = [5, 5, 10, 5, 5, 10]
let lab8 = [5, 10, 10, 10, 5]
let quiz1 = 40

function getSum(ForSum) {

  let final_sum = 0;
  for (i = 0; i < ForSum.length; i++) {
    final_sum += ForSum[i];
  }

  return final_sum;}


function main (lab1, lab2, lab3, lab4_5, lab6, lab8) {
  sum1 = getSum(lab1);
  sum2 = getSum(lab2);
  sum3 = getSum(lab3);
  sum4_5 = getSum(lab4_5);
  sum6 = getSum(lab6);
  sum8 = getSum(lab8);

  total = (quiz1*40)/40 + ((sum1+sum2+sum3+sum4_5+sum6+sum8) * 60/280);
  return total;
}

let x = main(lab1, lab2, lab3, lab4_5, lab6, lab8);

const results = {
  lab1: sum1,
  lab2: sum2,
  lab3: sum3,
  lab4_5: sum4_5,
  lab6: sum6,
  lab8: sum8 ,
  quiz1: quiz1,
  scores_of_labs: [lab1, lab2, lab3, lab4_5, lab6, lab8],
  total_of_labs_out_of_280: sum1+sum2+sum3+sum4_5+sum6+sum8,
  total_out_of_100: total,
  };

  console.log(results);
