
function getRandomHexColor() {  
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;  
}  

function createBoxes(amount) {  
    const boxesContainer = document.getElementById('boxes');  
    
    boxesContainer.innerHTML = '';  

    const boxes = [];  
    for (let i = 0; i < amount; i++) {  
        const boxSize = 30 + i * 10; 
        const box = document.createElement('div');  
        box.style.width = `${boxSize}px`;  
        box.style.height = `${boxSize}px`;  
        box.style.backgroundColor = getRandomHexColor();  
        box.classList.add('box');  
        boxes.push(box);  
    }  

    boxesContainer.append(...boxes);  
}  

function destroyBoxes() {  
    const boxesContainer = document.getElementById('boxes');  
    boxesContainer.innerHTML = ''; 
}  

const input = document.querySelector('input[type="number"]');  
const createButton = document.querySelector('button[data-create]');  
const destroyButton = document.querySelector('button[data-destroy]');  

createButton.addEventListener('click', () => {  
    const value = Number(input.value);  

    if (value < 1 || value > 100) {  
        return; 
    }  

    createBoxes(value);  
    input.value = ''; 
});  
 
destroyButton.addEventListener('click', destroyBoxes);