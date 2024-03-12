function changeText() {
     let potentialTexts = ['Krizza','Lou', 'Isidro', 'S222509548', 'SIT725'];
     let randomNumber = getRandomNumber(0, potentialTexts.length - 1);
     let textToChangeTo = potentialTexts[randomNumber];
     document.getElementById('heading').innerHTML = textToChangeTo;
    }
    
    function getRandomNumber(min,max){
     return Math.floor(Math.random()*(max-min+1)+min);
    }
    