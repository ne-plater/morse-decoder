const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
  '' : ' '
};

function decode(expr) {
   let data = []; // Your code here
  for ( let i = 0;  i < expr.length; i=i+10) {
   data.push(expr.slice(i, i+10));  
   }
 
  for (let i=0; i<data.length; i++) {
    if (data[i][0]==='0') {
      data[i] = String(+data[i]);
    }
  }
  
  for (let i=0; i<data.length; i++) {
    let item = '';
    for (let x=0; x < data[i].length; x=x+2) {
      
      if (data[i].slice(x, x+2)==='10') {
        item = item + '.'
       }; 
      if (data[i].slice(x, x+2)==='11') {
        item = item +'-'
        };
      
    }
     console.log(item);
      data[i] = item;
   }
  let result = '';
  for (let i=0; i<data.length; i++) {
    result = result + MORSE_TABLE[data[i]];
   }
  return result;
};

module.exports = {
    decode
}