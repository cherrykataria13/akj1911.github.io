// function solve(A, B) {
//   let n1 = A.length;
//   let n2 = B.length;
//   let dp = Array(n1 + 1)
//     .fill()
//     .map(() => Array(n2 + 1).fill(0));

//   for (let i = 0; i <= n1; i++) {
//     for (let j = 0; j <= n2; j++) {
//       if (i === 0 || j === 0) continue;
//       if (A[i - 1] === B[j - 1]) dp[i][j] = 1 + dp[i - 1][j - 1];
//       else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
//     }
//   }

//   let ans = "";
//   let i = n1,
//     j = n2;
//   while (i > 0 && j > 0) {
//     if (dp[i][j] == dp[i - 1][j]) i--;
//     else if (dp[i][j] == dp[i][j - 1]) j--;
//     else if (dp[i][j] == 1 + dp[i - 1][j - 1]) {
//       ans = A[i - 1] + ans;
//       i--;
//       j--;
//     }
//   }

//   console.log(dp[n1][n2]);
//   console.log(ans);
// }

// let A = "ABACABB";
// let B = "BABCAB";
// solve(A, B);

// /* A Naive recursive implementation of LCS problem in java*/

// /* Returns length of LCS for X[0..m-1], Y[0..n-1] */
// function lcs(X, Y, m, n) {
//   if (m == 0 || n == 0) return 0;
//   if (X[m - 1] == Y[n - 1]) return 1 + lcs(X, Y, m - 1, n - 1);
//   else return max(lcs(X, Y, m, n - 1), lcs(X, Y, m - 1, n));
// }

// /* Utility function to get max of 2 integers */
// function max(a, b) {
//   return a > b ? a : b;
// }

// // const br1 = document.createElement("br");
// // const str1 = document.createElement("textarea");
// // str1.innerText = "Enter String 1";
// // document.body.appendChild(str1);
// // document.body.appendChild(br1);
// // const str2 = document.createElement("textarea");
// // str2.innerText = "Enter String 2";
// // document.body.appendChild(str2);
// // document.body.appendChild(br1);
// // const btn1 = document.createElement('button')
// // btn1.innerText = "Submit";
// // document.body.appendChild(btn1);
// // document.body.appendChild(br1);

// // btn1.addEventListener('click',()=>{
// //   var A = str1.value;
// //   var B = str1.value;
// // });

// var s1 = A;
// var s2 = B;

// var X = s1;
// var Y = s2;
// var m = X.length;
// var n = Y.length;

// document.write("Length of LCS is" + " " + lcs(X, Y, m, n));

// // This code contributed by umadevi9616

function fn1() {
  function solve(A, B) {
    let n1 = A.length;
    let n2 = B.length;
    let dp = Array(n1 + 1)
      .fill()
      .map(() => Array(n2 + 1).fill(0));

    for (let i = 0; i <= n1; i++) {
      for (let j = 0; j <= n2; j++) {
        if (i === 0 || j === 0) continue;
        if (A[i - 1] === B[j - 1]) dp[i][j] = 1 + dp[i - 1][j - 1];
        else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }

    let ans = "";
    let i = n1,
      j = n2;
    while (i > 0 && j > 0) {
      if (dp[i][j] == dp[i - 1][j]) i--;
      else if (dp[i][j] == dp[i][j - 1]) j--;
      else if (dp[i][j] == 1 + dp[i - 1][j - 1]) {
        ans = A[i - 1] + ans;
        i--;
        j--;
      }
    }

    var length = "Length of common subsequence: " + dp[n1][n2];
    var Csubsequence = "Common subsequence: " + ans;
    document.getElementById("length").innerHTML = length;
    document.getElementById("Csubsequence").innerHTML = Csubsequence;
    document.getElementById("dp").innerHTML = dp;
  }

  let A = document.getElementById("str1").value;
  let B = document.getElementById("str2").value;
  solve(A, B);
}
