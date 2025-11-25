/**
 * ローマ数字は7種類の記号で表されます：I、V、X、L、C、D、M。
記号       値
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

例えば、数字の2はローマ数字でIIと表記され、単に1が2つ並んだ形です。12はXIIと表記され、これはX + IIに相当します。
数字の27はXXVIIと表記され、これはXX + V + IIを意味します。

ローマ数字は通常、左から右へ大きい値から小さい値の順に書かれます。
ただし、4はIIIIとは表記せず、代わりにIVと表記します。
これは1が5の前にあるため、5から1を引いて4を表すからです。
同様の原理で9はIXと表記されます。減算が用いられるケースは以下の6つです：

IはV（5）やX（10）の前に配置して4と9を表すことができます。
XはL（50）やC（100）の前に配置して40と90を表すことができます。
CはD（500）やM（1000）の前に配置して400と900を表すことができます。
ローマ数字で表された数値を整数に変換してください。

"III"
"LVIII"
"MCMXCIV"
 */
function romanToInt(s: string): number {
  const romanMap: Record<string, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }

  let result = 0;

  for (let i = 0; i < s.length; i++) {

    // 
    const current = romanMap[s[i]]
    const next = romanMap[s[i + 1]]

    if (current < next) {
      result -= current
    } else {
      result += current
    }
  }
  return result
};
