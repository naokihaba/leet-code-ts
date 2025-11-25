/**
 * 
 * 配列内の文字列の中で最も長い共通接頭辞を見つける関数を作成してください。

共通接頭辞が存在しない場合は、空文字列 "" を返してください。

例 1:

入力: strs = ["flower","flow","flight"]
出力: "fl"

例 2:

入力: strs = ["dog","racecar","car"]
出力: ""
説明: 入力された文字列間に共通する接頭辞は存在しません。

制約:

* 1 <= strs.length <= 200
* 0 <= strs[i].length <= 200
* strs[i] は空でない場合、小文字の英字のみで構成されます。

 */
function longestCommonPrefix(strs: string[]): string {
  let result = ""

  // 文字が1番短いところまでがループの最大
  for (let i = 0; i < Math.min(...strs.map(str => str.length)); i++) {
    // 起点は1つ目の文字
    let char = strs[0][i]


    // 1文字ずつ3文字全体を検証する
    if (strs.every(str => str[i] === char)) {
      result += char
    } else {
      break
    }
  }

  return result
};


longestCommonPrefix(["flower", "flow", "flight"])
