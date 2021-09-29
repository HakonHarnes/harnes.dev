window.addEventListener('resize', event => {
    const termynal = document.getElementById("termynal");
    termynal.style.width = '100%'; 
}); 

// Sets the terminal data 
const termynal = new Termynal('#termynal', { noInit: 'true', lineDelay: '700', typeDelay: '40', 
        lineData: [
            { type: 'input', value: 'whoami' },
            { value: 'hakon' },
            { value: '' },
            { type: 'input', value: 'whereis hakon' },
            { value: 'trondheim' }, 
            { value: '' },
            { type: 'input', value: 'echo $hakon.age' },
            { value: '23' }, 
            { value: '' },
            { type: 'input', value: 'echo $hakon.speciality' },
            { value: 'security' }, 
            { value: '' },
            { type: 'input', value: 'echo $hakon.education' },
            { value: 'norwegian university of science and technology' }, 
            { value: '' },
        ]
    }
)

// Initializes the terminal 
let terminalInitialized = false; 
export function startTerminal() {
    if(!terminalInitialized){
        termynal.init(); 
        terminalInitialized = true; 
    }
}