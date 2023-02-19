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
};

function decode(expr) {
    // const inputArr = expr.split('');
    console.log(expr);
    const letterCount = expr.length / 10;
    console.log('letterCount', letterCount);

    let word = '';

    for (let i = 0; i < letterCount; i++) {
        const letter = expr.slice(i * 10, ((i * 10) + 10));
        let codedLetter = '';
        if (letter === '**********') {
            word += ' ';
        };

        for (let i = 0; i < 5; i++) {
            const symbol = letter.slice(i * 2, ((i * 2) + 2));
                if (symbol == 00) {
                    codedLetter += '';
                } else if (symbol == 10) {
                    codedLetter += '.';
                } else if (symbol == 11) {
                    codedLetter += '-';
                } else if (symbol == '**') {
                    codedLetter += '';
                };
        };

        const decodedLetter = MORSE_TABLE[codedLetter];
        if (decodedLetter) {
            word += decodedLetter;
        };

    }
return word;

}

module.exports = {
    decode
}