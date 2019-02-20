

// Put 'name' in the global scope so it is reliably accessible by both functions.
import Navigation from './src/Navigation';
import Header from './src/Header';
import Content from './src/Content';
import Footer from './src/Footer';
var name;

// Verify that user entered some name
var blankChecker = function blankChecker(){ // We should also add an explicit name in our fxn. declaration as that will help us with tracing possible errors.
    if(name === ''){
        name = prompt('For real, enter your name!');

        // RECURSION
        blankChecker();
    }
};

// 'Main' fxn. to start the program
var nameChecker = function nameChecker(){
    name = prompt('Please enter your name!');

    // Check for a blank name!
    blankChecker();

    document.querySelector('h1').textContent = `Hello, ${name}`;
};


document.body.innerHTML =  `

${Navigation}
${Header}
${Content}
${Footer}

`;

nameChecker();