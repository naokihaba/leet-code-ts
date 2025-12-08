/**
 * 67. 2進数の加算
 *
 * 2つの2進数文字列 a と b が与えられます。
 * それらの和を2進数文字列として返してください。
 *
 * 例1:
 * 入力: a = "11", b = "1"
 * 出力: "100"
 *
 * 例2:
 * 入力: a = "1010", b = "1011"
 * 出力: "10101"
 *
 * 制約:
 * - 1 <= a.length, b.length <= 10^4
 * - a と b は '0' または '1' の文字のみで構成されます。
 * - 各文字列はゼロ自体を除いて先頭にゼロを含みません。
 */
export function addBinary(a: string, b: string): string {
  const numA = BigInt('0b' + a)
  const numB = BigInt('0b' + b)
  return (numA + numB).toString(2)
}

addBinary("11", "1");
addBinary("1010", "1011");
