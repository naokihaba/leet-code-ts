/*
 * 【問題】
 * 文字列の配列から、最長の共通接頭辞（プレフィックス）を見つける関数を作成してください。
 *
 * 共通の接頭辞がない場合は、空文字列 "" を返してください。
 *
 * 【制約】
 * - 1 <= strs.length <= 200
 * - 0 <= strs[i].length <= 200
 * - strs[i] は空でない場合、小文字の英字のみで構成される
 *
 * 【例1】
 * 入力: strs = ["flower", "flow", "flight"]
 * 出力: "fl"
 *
 * 【例2】
 * 入力: strs = ["dog", "racecar", "car"]
 * 出力: ""
 * 解説: 入力文字列間に共通の接頭辞はない
 */

export function longestCommonPrefix(strs: string[]): string {
  if (!strs.length) {
    return "";
  }

  // flower
  const firstStr = strs[0];

  for (let i = 0; i < firstStr.length; i++) {
    const currentChar = firstStr[i];

    /**
     * ["flower", "flow", "flight"]
     *
     * i = 0 (currentChar = "f")
     *   j = 1: strs[1][0] = "f" ✓
     *   j = 2: strs[2][0] = "f" ✓
     *
     * i = 1 (currentChar = "l")
     *   j = 1: strs[1][1] = "l" ✓
     *   j = 2: strs[2][1] = "l" ✓
     *
     * i = 2 (currentChar = "o")
     *   j = 1: strs[1][2] = "o" ✓
     *   j = 2: strs[2][2] = "i" ✗ → return "fl"
     */
    for (let j = 1; j < strs.length; j++) {
      if (i >= strs[j].length || strs[j][i] !== currentChar) {
        return firstStr.slice(0, i);
      }
    }
  }

  return firstStr;
}

longestCommonPrefix(["flower", "flow", "flight"]);
