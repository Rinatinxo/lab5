function load() {
  let column_1 = [
    8, 7, 4, 5, 10, 5, 9, 9, 1, 5, 3, 3, 2, 5, 7, 3, 5, 9, 10, 1, 5, 3, 2, 2,
    10, 7, 4, 4, 9, 1,
  ];
  let column_2 = [
    10, 8, 1, 6, 9, 10, 6, 7, 8, 2, 10, 3, 8, 9, 6, 7, 3, 8, 6, 10, 1, 7, 8, 9,
    6, 5, 9, 8, 6, 7,
  ];
  let column_3 = [
    66, 71, 78, 60, 97, 67, 62, 55, 64, 51, 56, 72, 76, 42, 75, 74, 50, 70, 71,
    95, 99, 60, 79, 90, 60, 88, 98, 52, 73, 80,
  ];
  let column_4 = [
    86, 79, 65, 76, 67, 73, 62, 77, 76, 89, 62, 97, 79, 85, 65, 60, 75, 53, 76,
    81, 69, 96, 99, 76, 50, 68, 69, 50, 77, 95,
  ];

  let sum1 = 0;
  let sum2 = 0;
  let sum3 = 0;
  let sum4 = 0;
  let total_score = 0;
  let sums = [];

  for (let i = 0; i < 30; i++) {
    sum1 += column_1[i];
    sum2 += column_2[i];
    sum3 += column_3[i];
    sum4 += column_4[i];
  }

  sums.push(sum1, sum2, sum3, sum4);

  for (let i = 0; i < sums.length; i++) {
    total_score += sums[i];
  }

  const results = {
    col1: column_1,
    col2: column_2,
    col3: column_3,
    col4: column_4,
    sums: sums,
    total_score: total_score,
  };
  console.log(results);
}
load();
