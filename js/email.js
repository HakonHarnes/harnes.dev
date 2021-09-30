
// HTML elements 
const form = document.querySelector('.contact-me__form'); 
const button = document.querySelector('.contact-me__button'); 

// Form submit listener 
form.addEventListener('submit', async e => {
    
    // Prevents default form behavious 
    e.preventDefault(); 

    // Shows loading button 
   showLoadingButton(); 

    // Sends data to server  
    const response = await fetch('http://localhost:3000/api/email',
    {
        method: 'POST', 
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({data: {
            name: form.children[0].value,
            email: form.children[1].value, 
            message: form.children[2].value
        }}) 
    }); 

    // Shows response 
    // TODO: Implement proper toast 
    if(response.status === 200){
        showSuccessButton(); 
        form.reset(); 
    }
    else {
        alert('Error: Please contact me at hakon@harnes.dev');
        showErrorButton();
    }

});

// Shows loading button 
const showLoadingButton = () => {
    button.classList.add('button--loading'); 
    button.disabled = true; 
}

// Shows success button 
const showSuccessButton = () => {
    button.classList.remove('button--loading'); 
    button.disabled = false; 
}

// Shows success button 
const showErrorButton = () => {
    button.classList.remove('button--loading'); 
    button.disabled = false; 
}
