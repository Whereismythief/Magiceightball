// Magic 8ball

// syntax for a ternary expression: condition ? exprIfTrue : exprIfFalse

// If the user wants, he or she can enter his or her name in between the quotation marks.
var userName = 'buddy';
console.log(userName);

// greeting based on user entry

if ( userName == '' ) {
    console.log('Hello!');
}
else (console.log(`Hello, ${userName}!`));

// enter your question for the magic 8 ball between the ''

userQuestion = 'Will I win the lottery?'

if ( userName == '') {
    console.log(`The question is '${userQuestion}'`);
}
else (console.log(`${userName} is asking the Magic 8 Ball '${userQuestion}'`));

//generate random number between 0 and 7

var randomNumber = Math.floor(Math.random() * 8);
console.log(randomNumber);

// declare a variable assign that variable a string value based on the randomNumber
{
    var eightBall = '';

if (randomNumber === 0) {
    eightBall = 'It is certain.';
} else if (randomNumber === 1) {
    eightBall = 'It is decidely so.';
} 
else if (randomNumber === 2) {
    eightBall = 'Reply hazy try again.';
} else if (randomNumber === 3) {
    eightBall = 'Cannot predict now.';
} else if (randomNumber === 4) {
    eightBall = 'Do not count on it.';
} else if (randomNumber === 5) {
    eightBall = 'My sources say no.';
} else if (randomNumber === 6) {
    eightBall = 'Outlook not so good.';
} else {eightBall = 'Signs point to yes.'};

console.log(eightBall);

}
