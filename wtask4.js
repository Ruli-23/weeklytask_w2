// Palindrom
function cekPalindrom(kata) {
    let reversed = kata.split('').reverse().join('');
    return reversed === kata ? 'Palindrom' : 'Bukan Palindrom';
}

console.log(cekPalindrom('malam')); // Output: Palindrom
console.log(cekPalindrom('hello')); // Output: Bukan Palindrom

//Reverse
function reverseWords(kalimat) {
    return kalimat.split(' ').reverse().join(' ');
}

// Contoh penggunaan
console.log(reverseWords('Saya Belajar Javascript')); // Output: Javascript Belajar Saya
console.log(reverseWords('Halo Dunia')); // Output: Dunia Halo
