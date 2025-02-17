
const loginForm = document.querySelector('.login-form');  

loginForm.addEventListener('submit', (event) => {  
 
    event.preventDefault();  
    
    const formData = {};  
  
    for (let element of loginForm.elements) {  
        if (element.name) { 
            const value = element.value.trim(); 
            if (value === '') {  
                alert('All form fields must be filled in');  
                return; 
            }  
            formData[element.name] = value; 
        }  
    }  


    console.log(formData);  

    loginForm.reset();  
});