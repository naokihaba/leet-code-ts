/**
 * 58. 最後の単語の長さ
 *
 * 単語とスペースで構成される文字列 s が与えられます。
 * 文字列内の最後の単語の長さを返してください。
 *
 * 「単語」とは、スペース以外の文字のみで構成される最大の部分文字列です。
 *
 * 例1:
 * 入力: s = "Hello World"
 * 出力: 5
 * 説明: 最後の単語は "World" で、長さは 5 です。
 *
 * 例2:
 * 入力: s = "   fly me   to   the moon  "
 * 出力: 4
 * 説明: 最後の単語は "moon" で、長さは 4 です。
 *
 * 例3:
 * 入力: s = "luffy is still joyboy"
 * 出力: 6
 * 説明: 最後の単語は "joyboy" で、長さは 6 です。
 *
 * 制約:
 * - 1 <= s.length <= 10^4
 * - s は英字とスペース ' ' のみで構成されます。
 * - s には少なくとも1つの単語が含まれます。
 */
export function lengthOfLastWord(s: string): number {
  const words = s.trim().split(" ");
  const lastWord = words.pop()!
  return lastWord.length
}

lengthOfLastWord("Hello World")
lengthOfLastWord("   fly me   to   the moon  ")
lengthOfLastWord("luffy is still joyboy")
