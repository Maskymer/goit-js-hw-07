function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


function createBoxes(amount) {  
  const boxesContainer = document.getElementById('boxes');  
  const fragment = document.createDocumentFragment(); 

  for (let i = 0; i < amount; i++) {  
    const div = document.createElement('div');  
    const size = 30 + i * 10; 
    div.style.width = `${size}px`;  
    div.style.height = `${size}px`;  
    div.style.backgroundColor = getRandomHexColor(); 
    fragment.appendChild(div); 
  }  

  boxesContainer.appendChild(fragment); 
}  

function destroyBoxes() {  
  const boxesContainer = document.getElementById('boxes');  
  boxesContainer.innerHTML = ''; 
}  

const input = document.querySelector('#controls input[type="number"]');  
const createButton = document.querySelector('[data-create]');  
const destroyButton = document.querySelector('[data-destroy]');  

createButton.addEventListener('click', () => {  
  const amount = Number(input.value); 
  if (amount < 1 || amount > 100) {  
    return; 
  }  
  destroyBoxes(); 
  createBoxes(amount); 
  input.value = ''; 
});  

destroyButton.addEventListener('click', () => {  
  destroyBoxes(); 
  input.value = ''; 
});  