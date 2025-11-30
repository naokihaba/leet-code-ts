/**
 * 28. Find the Index of the First Occurrence in a String (文字列内で最初に出現する位置を見つける)
 *
 * 【問題】
 * 2つの文字列 needle と haystack が与えられます。
 * haystack の中で needle が最初に出現するインデックスを返してください。
 * needle が haystack に含まれていない場合は -1 を返してください。
 *
 * 【例1】
 * 入力: haystack = "sadbutsad", needle = "sad"
 * 出力: 0
 * 説明: "sad" はインデックス 0 と 6 に出現します。
 *       最初に出現するのはインデックス 0 なので、0 を返します。
 *
 * 【例2】
 * 入力: haystack = "leetcode", needle = "leeto"
 * 出力: -1
 * 説明: "leeto" は "leetcode" に含まれていないので、-1 を返します。
 *
 * 【制約】
 * - 1 <= haystack.length, needle.length <= 10^4
 * - haystack と needle は小文字の英字のみで構成されます
 */
export function strStr(haystack: string, needle: string): number {
  // haystack = "sadbutsad"
  // needle = "sad"
  const matchIndex = haystack.indexOf(needle)

  console.log(matchIndex)

  return matchIndex

}

strStr("sadbutsad", "sad")
strStr("leetcode", "leeto")
