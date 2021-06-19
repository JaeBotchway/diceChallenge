
let randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6
randomNumber1 = Math.floor(randomNumber1 + 1 ) ;

console.log(randomNumber1);


const firstImage = 'images/dice' + randomNumber1 + '.png';
document.querySelectorAll('img')[0].setAttribute('src',firstImage)



let randomNumber2 = Math.random();
randomNumber2 = randomNumber2 * 6;
randomNumber2 = Math.floor(randomNumber2) + 1;
console.log(randomNumber2);


const secondImage = 'images/dice' + randomNumber2 + '.png';
document.querySelectorAll('img')[1].setAttribute('src',secondImage)

if(randomNumber1 > randomNumber2){

    document.querySelector('h1').innerHTML = 'Player1 wins'
}
else if (randomNumber1 < randomNumber2){
    document.querySelector('h1').innerHTML = 'Player2 wins'
}
else if(randomNumber1 === randomNumber2){
    document.querySelector('h1').innerHTML = 'Players drew'
}