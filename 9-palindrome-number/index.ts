// 整数 x が与えられたとき、x が回文数であれば true を、そうでない場合は false を返してください。
// 121
// -121
// 10
function isPalindrome(x: number): boolean {
  const stringX = x.toString()
  const reverseStringX = stringX.split('').reverse().join('')

  if ( stringX === reverseStringX){
    return true
  }

  return false
};

isPalindrome(121)
isPalindrome(-121)
isPalindrome(10)
