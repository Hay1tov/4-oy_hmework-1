//                                  No_1

// function power(a, n) {
//   let result = a ** n;
//   console.log(`Natija ${result}`);

// }

// power(3, 5)


//                                  No_2


// function mean(a, b) {
//   let result = (a + b) / 2;
//   let result2 = Math.sqrt(a * b);
//   console.log(`O'rta arimtetigi ${result}`);
//   console.log(`O'rta geometrigi ${result2}`);
// }

// mean(12, 48)


//                                  No_3


// function sign(n) {
//   if (n > 0) {
//     console.log(`Natija 1`);
//   } else if (n < 0) {
//     console.log(`Natija -1`);
//   } else {
//     console.log(`Natija 0`);
//   }
// }

// sign(-1);


//                                  No_4


// function numberOfRoots(A, B, C) {
//   let D = B ** 2 - 4 * A * C;
//   if (D > 0) {
//     console.log(`Natija 2`);
//   } else if (D == 0) {
//     console.log(`Natija 1`);
//   } else {
//     console.log(`Natija 0`);
//   }
// }

// numberOfRoots(-1, -6, 9);


//                                  No_5


// function areaCircle(R) {
//   let S = Math.PI * R ** 2;

//   console.log(`Natija ${S.toFixed(2)}`);
// }

// areaCircle(20)


//                                  No_6


// function sumRange(A, B) {
//   let result = 0;
//   if (A <= B) {
//     for (let i = A; i <= B; i++) {
//       result += i;
//     }
//     console.log(`Natija ${result}`);
//   } else {
//     return 0;
//   }
// }


// sumRange(8, 1);


//                                  No_7


// function calc(A, B, S) {
//   let result = 0;
//   switch (S) {
//     case '+':
//       result = A + B;
//       console.log(`Natija ${result}`);
//       break;
//     case '-':
//       result = A - B;
//       console.log(`Natija ${result}`);
//       break;
//     case '/':
//       result = A / B;
//       console.log(`Natija ${result}`);
//       break;
//     case '*':
//       result = A * B;
//       console.log(`Natija ${result}`);
//       break;
//     default:
//       console.log(`Natija 0`)
//   }
// }

// calc(4,8,'/');


//                                  No_8


// function isEven(K) {
//   if (K % 2 == 0) {
//     console.log(true);
//   } else {
//     console.log(false)
//   }
// }

// isEven(10);


//                                  No_9


// function sortABC(a, b, c) {
//   let min = null;
//   let mid = null;
//   let max = null;

//   if (a <= b && a <= c) {
//     min = a;
//     if (b <= c) {
//       mid = b;
//       max = c;
//     } else {
//       mid = c;
//       max = b;
//     }
//   } else if (b <= a && b <= c) {
//     min = b;
//     if (a <= c) {
//       mid = a;
//       max = c;
//     } else {
//       mid = c;
//       max = a;
//     }
//   } else {
//     min = c;
//     if (a <= b) {
//       mid = a;
//       max = b;
//     } else {
//       mid = b;
//       max = a;
//     }
//   }

//   console.log(`Natija ${min} ${mid} ${max}`);
// }

// sortABC(10, 5, 8);


//                                  No_10


// function isPowerN(K, N) {
//   if (K <= 0 || N <= 1) return K === 1;

//   while (K % N === 0) {
//     K = K / N;
//   }

//   return K === 1;
// }

// console.log(isPowerN(25, 5));


//                                  No_11


// function isPrime(N) {
//   let loop = 0;
//   if (N < 2) {
//     return false;
//   }
//   for (let i = 1; i <= N; i++) {
//     if (N % i == 0) {
//       loop++;
//     }
//   }
//   if (loop == 2) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }

// isPrime(4) // N > 0 shart bo'yicha son kiriting


//                                  No_12


// let tub = 0;

// function isPrime(N) {
//   let loop = 0;
//   if (N < 2) {
//     return false;
//   }
//   for (let i = 1; i <= N; i++) {
//     if (N % i == 0) {
//       loop++;
//     }
//   }
//   if (loop == 2) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function numberOfPrime(number) {
//   let count = 0;
//   for (let j = 1; j <= number; j++) {
//     if (isPrime(j)) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(numberOfPrime(10));


//                                  No_13


// function digitCount(K) {
//   return K.toString().length;
// }

// function digitNth(K, N) {
//   let count = digitCount(K);

//   if (N > count) {
//     return -1;
//   }

//   return parseInt(K.toString()[N - 1]);
// }

// console.log(digitNth(105782, 5));


//                                  No_13


