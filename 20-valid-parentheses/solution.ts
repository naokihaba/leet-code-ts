/*
 * 【問題】
 * '(', ')', '{', '}', '[', ']' の文字のみを含む文字列 s が与えられます。
 * 入力文字列が有効かどうかを判定してください。
 *
 * 入力文字列が有効である条件:
 * - 開き括弧は同じ種類の閉じ括弧で閉じられなければならない
 * - 開き括弧は正しい順序で閉じられなければならない
 * - すべての閉じ括弧には対応する同じ種類の開き括弧がある
 *
 * 【制約】
 * - 1 <= s.length <= 10^4
 * - s は括弧文字 '()[]{}' のみで構成される
 *
 * 【例1】
 * 入力: s = "()"
 * 出力: true
 *
 * 【例2】
 * 入力: s = "()[]{}"
 * 出力: true
 *
 * 【例3】
 * 入力: s = "(]"
 * 出力: false
 *
 * 【例4】
 * 入力: s = "([])"
 * 出力: true
 *
 * 【例5】
 * 入力: s = "([)]"
 * 出力: false
 */

export function isValid(s: string): boolean {
  const stack: String[] = [];

  const pairsMap: Record<string, string> = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (const char of s) {
    console.log(`文字: "${char}" | スタック: [${stack.map((s) => `"${s}"`).join(", ")}]`);

    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
      console.log(`  → 開き括弧なのでpush → スタック: [${stack.map((s) => `"${s}"`).join(", ")}]`);
    } else {
      const top = stack.pop();
      console.log(`  → 閉じ括弧なのでpop → top: "${top}", 期待値: "${pairsMap[char]}"`);

      if (top !== pairsMap[char]) {
        console.log(`  → 不一致! falseを返す`);
        return false;
      }
      console.log(`  → 一致! 続行`);
    }
  }

  return stack.length === 0;
}

console.log("--- () ---");
console.log("結果:", isValid("()"));
