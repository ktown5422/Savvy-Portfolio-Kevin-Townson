var name;

function blankChecker(){ // We should also add an explicit name in our fxn. declaration as that will help us with tracing possible errors.
    if(name === ''){
        name = prompt('For real, enter your name!');

        // RECURSION
        blankChecker();
    }
}


export default function nameChecker(){
    name = prompt('Please enter your name!');

    
    blankChecker();
    
    
    document.querySelector('h1').textContent = `Welcome to my Portfolio, ${name}`;
}
