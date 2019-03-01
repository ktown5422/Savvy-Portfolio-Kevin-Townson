import Navigation from './src/Navigation';
import Header from './src/Header';
import Content from './src/Content';
import Footer from './src/Footer';
import nameChecker from './src/Greeter';




var State = { 
        'Home':  {
            'links': [ 'Home', 'Blog', 'Contact', 'Projects' ],
            'title': 'Welcome to my Website'
    },

        'Blog':  {
            'links': [ 'Home', 'Blog', 'Contact', 'Projects' ],
            'title': 'Welcome to my Blog'
    },

        'Contact':  {
            'links': [ 'Home', 'Blog', 'Contact', 'Projects' ],
            'title': 'Welcome to my Contact'
    },

        'Projects':  {
            'links': [ 'Home', 'Blog', 'Contact', 'Projects' ],
            'title': 'Welcome to my Projects'
    }
};

var root = document.querySelector('#root');
var render;

function navHandler(event){
    event.preventDefault();

    render(State[event.target.textContent]);
}

render = function Render(state){
    var links;
    var i = 0;
    
    //Grab each component and update #root's HTML with the generated HTML that works with State
    root.innerHTML = `
    ${Navigation(state)}
    ${Header(state.title)}
    ${Content(state)}
    ${Footer(state)}
    `;
    
    links = document.querySelectorAll('#navigation > ul > li > a'); 

    while(i < links.length){
        
        links[i].addEventListener('click', (event) => {
            event.preventDefault();
    
            render(State[event.target.textContent]);
        
    });

    links[i].addEventListener('click', navHandler);

    i++;
  }

}

render(State.Home);






    /*links[1].addEventListener('click', (event) => {
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
    });*/

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