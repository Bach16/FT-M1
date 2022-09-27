'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  var to = 0
  var array = []
  for (let i = 0; i < num.length; i++) {
    array.unshift(num[i])

  }
  for (let e = 0; e < array.length; e++) {
    
    to = to + Math.pow(2,e) * array[e]
    
    
  }
  return to
}

function DecimalABinario(num) {
  // tu codigo aca
//var nu = num
var result = []
var bin = ""
for(let e = 0; e < 100; e++) {
    result.unshift(num%2)
    num = Math.floor(num/2)
 if (num < 1) {
  break;
 }
}
for (let i = 0; i < result.length; i++) {
    bin = bin + result[i]
}
return bin

}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
}