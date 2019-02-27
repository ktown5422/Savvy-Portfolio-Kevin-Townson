import Navigation from './src/Navigation';
import Header from './src/Header';
import Content from './src/Content';
import Footer from './src/Footer';
import nameChecker from './src/Greeter';




var State = { 
    'Home':  {
        'title': 'Welcome to my Website'
},

    'Blog':  {
        'title': 'Welcome to my Blog'
},

    'Contact':  {
        'title': 'Welcome to my Contact'
},

    'Projects':  {
        'title': 'Welcome to my Projects'
}
};

var root = document.querySelector('#root');

function render(state){
    var links;
    
    root.innerHTML = `
    ${Navigation(state)}
    ${Header(state.title)}
    ${Content(state)}
    ${Footer(state)}
    `;
    
    links = document.querySelectorAll('#navigation > ul > li > a'); 

    links[0].addEventListener('click', (event) => {
        event.preventDefault();
        render(State[event.target.textContent]);
    });

    links[1].addEventListener('click', (event) => {
        event.preventDefault();
        render(State[event.target.textContent]);
    });

    links[2].addEventListener('click', (event) => {
        event.preventDefault();
        render(State[event.target.textContent]);
    });

    links[3].addEventListener('click', (event) => {
        event.preventDefault();
        render(State[event.target.textContent]);
    });
}

render(State.Home);

 /*document.querySelector('#navigation li:first-child')
.addEventListener('click', (e) => {
    e.preventDefault ();
    console.log(e.target.href);
    render(home);
});

document.querySelector('#navigation li:nth-child(2) > a')
.addEventListener('click', (e) => {
    e.preventDefault ();
    console.log(e.target.href);
    render(blog);
    
});

document.querySelector('#navigation li:nth-child(3) > a')
.addEventListener('click', (e) => {
    e.preventDefault ();
    console.log(e.target.href);
    render(contact);
    
});


document.querySelector('#navigation li:nth-child(4) > a')
.addEventListener('click', (e) => {
    e.preventDefault ();
    console.log(e.target.href);
    render(projects);
    
});*/

// nameChecker();