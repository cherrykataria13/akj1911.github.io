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
