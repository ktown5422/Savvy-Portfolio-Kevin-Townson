import Navigation from './src/Navigation';
import Header from './src/Header';
import Content from './src/Content';
import Footer from './src/Footer';
import nameChecker from './src/Greeter';

var home = {
    'title': 'Welcome to my website'
};

var blog = {
    'title': 'Welcome to my blog'
};

var contact = {
    'title': 'Welcome to my contact'
};

var projects = {
    'title': 'Welcome to my projects'
};

var root = document.querySelector('#root');

function render(state){
root.innerHTML = `
${Navigation(state)}
${Header(state.title)}
${Content(state)}
${Footer(state)}

`;
}

render(home);


document.querySelector('#navigation li:nth-child(1) > a')
.addEventListener('click', (e) => {
    e.preventDefault ();
    render(home);
});

document.querySelector('#navigation li:nth-child(2) > a')
.addEventListener('click', (e) => {
    e.preventDefault ();
    render(blog);
    
});

document.querySelector('#navigation li:nth-child(3) > a')
.addEventListener('click', (e) => {
    e.preventDefault ();
    render(contact);
    
});


document.querySelector('#navigation li:nth-child(4) > a')
.addEventListener('click', (e) => {
    e.preventDefault ();
    render(projects);
    
});



