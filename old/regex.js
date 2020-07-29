/*
I'm trying to match all \n that are not sandwiched between \n\n**\n  and **\n  and replace them with <br />
For example if I had this text:
Hello\n\n\n**\n my name \n is \n Isabel**\n\n\n\n\n
This would return:
Hello<br />\n\n**\n my name \n is \n Isabel**\n<br /><br /><br /><br />
I've tried everything I can think of. Any help is appreciated!
*/

str = "Hello\n\n\n**\n my name \n is \n Isabel**\n\n\n\n\n"

function removeNs(str) {
  let sandwich = false;
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let start = /\n\n\*\*\n/.exec(str.slice(i, str.length)).index
    let end = /\*\*\n/.exec(str.slice(i, str.length)).index
    
    result += str.
    

    if (/\n\n\*\*\n/.exec(str.slice(i, 8)) !== null) { sandwich = true }
    if (/\*\*\n/.exec(str.slice(i, 4)) !== null) { sandwich = false }
    console.log(sandwich)
    if (!sandwich && /\n/.exec(str.slice(i, 2)) === null) {
      result += str[i]
    }
  }
  return result;
}


console.log(removeNs(str))