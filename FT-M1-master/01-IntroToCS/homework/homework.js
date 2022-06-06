'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let dec = 0, rest = 0;
  for (let i = 0; num > 0; i++) {
    rest = num % 10;

    if (rest === 1)
      dec = dec + (2 ** i)



   
    num = Math.floor(num / 10);

  }
  return dec;
}

function DecimalABinario(num) {
  // tu codigo aca
  let rest = 0, bin = "";
  for (let i = 0; num >= 1; i++) {
    rest = num % 2;
    if (rest === 0)
      bin = "0" + bin;
    else
      bin = "1" + bin;

    num = num / 2;

  }

  return bin;

}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}