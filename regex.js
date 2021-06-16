//regular expression
//+, *, ?,., ()
//flag /igm
//\d,\w,\D,\W
//[] character set , [^]negation set,(){2,3} quantifier
//positive , Negative lookahead (?=) positive lookahead (?!) negative lookahead
//Greedy non Greedy
//Holding capture group
//^$(start and end)
//email, URL address, phone number validation

//strong password validation

// X(?=Y)	Positive lookahead	X if followed by Y
// X(?!Y)	Negative lookahead	X if not followed by Y
//(?<=Y)X	Positive lookbehind	X if after Y
//(?<!Y)X	Negative lookbehind	X if not after Y

// Test(return true or false)
// search(return index number)
// match (return elements in array)

const str = 'Jaavascript Bootcamp is the ultimate bootcamp'

const regex = /bootcamp/gi
// console.log(regex.test(str))
// console.log(str.search(regex))
console.log(str.match(regex))

// ^ (?=.* [A - Z].* [A - Z])(?=.* [!@#$&*]) (?=.* [0 - 9].* [0 - 9])(?=.* [a - z].* [a - z].* [a - z]).{ 8 } $

//   ^ Start anchor
//     (?=.* [A - Z].* [A - Z])        Ensure string has two uppercase letters.
// (?=.* [!@#$&*]) Ensure string has one special case letter.
// (?=.* [0 - 9].* [0 - 9])        Ensure string has two digits.
// (?=.* [a - z].* [a - z].* [a - z]) Ensure string has three lowercase letters.
// .{ 8 } Ensure string is of length 8.
// $                         End anchor.

// let str = '<span class="my">';

// let regexp = /<(([a-z]+)\s*([^>]*))>/;

// let result = str.match(regexp);
// console.log(result)
// console.log(result[0]); // <span class="my">
// console.log(result[1]); // span class="my"
// console.log(result[2]); // span
// console.log(result[3]); // class="my"

//strong password(10)
//must contain one capital letter
//must contain one small letter
//must contain one special case !@#$%^&*
//must contain one number
