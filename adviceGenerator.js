const adviceNumber=document.querySelector("#advice-number-span");
const advice=document.querySelector("#advice-span");
const dice=document.querySelector(".dice");
const url = "https://api.adviceslip.com/advice";
const wholeDimension=document.getElementById('whole-section-part');
const cardDimension=document.getElementById('advice-card-part');
const cardColor=document.querySelectorAll('.advice-card');

let widthDimensions
let heightDimensions

function displayAdvice(response){
    adviceNumber.innerHTML=response.data.slip.id;
    advice.innerHTML=response.data.slip.advice;  
}

function getAdvice(params) {
    axios.get(url)
        .then(displayAdvice)
        .then(()=>{
            dice.classList.remove("loader-animation");
        })
}

function actionButton(){
    dice.classList.add("loader-animation");
    getAdvice();
}

getAdvice();
dice.addEventListener('click',actionButton);

widthDimensions=window.innerWidth-40;
heightDimensions=window.innerHeigh-40; 

cardDimension.width=widthDimensions;





/*function changeColor(){
    cardDimension.style.backgroundColor='442a9d'
}
cardDimension.addEventListener('mouseover',(event)=>{
    event.target.style.backgroundColor='#442a9d';
}
)
cardDimension.addEventListener('mouseout', (e)=>{
    e.target.style.backgroundColor='#FF4949';
}
)*/

