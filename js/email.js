// HTML elements 
const form = document.querySelector('.contact-me__form'); 
const button = document.querySelector('.contact-me__button'); 
const toast = document.querySelector('.toast'); 

const buttonText = button.innerHTML; 

// Form submit listener 
form.addEventListener('submit', async e => {

    // Prevents default form behavious 
    e.preventDefault(); 

    // Shows loading button 
    showLoadingButton(); 

    // Sends data to server  
    const response = await fetch('https://harnes-dev-api.herokuapp.com/api/email',
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
    if(response.status === 200){
        showSuccessButton(); 
        setTimeout(() => { form.reset() } , 3000); 
    }
    else showErrorButton();
        
    // Displays normal button again 
    setTimeout(displayNormalButton, 3000); 
});

// Shows loading button 
const showLoadingButton = () => {
    button.classList.add('button--loading'); 
    button.innerHTML = "‏‏‎ ‎‎‎"; 
    button.disabled = true; 
}

// Hides loading button 
const displayNormalButton = () => {
    button.className = 'contact-me__button button'
    button.innerHTML = buttonText; 
    button.disabled = false; 
}

// Shows success button
const showSuccessButton = () => {
    button.classList.remove('button--loading'); 
    button.classList.add('button--success'); 
    button.innerHTML = "✔"; 
}

// Shows error button
const showErrorButton = () => {
    button.classList.remove('button--loading'); 
    button.classList.add('button--error'); 
    button.innerHTML = "✖"; 
}
