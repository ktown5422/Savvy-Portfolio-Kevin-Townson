import Navigation from './src/Navigation';
import Header from './src/Header';
import Content from './src/Content';
import Footer from './src/Footer';
import * as State from './state';
import { startCase } from 'lodash';
import Navigo from 'navigo';
import axios from 'axios';

var router = new Navigo(location.origin);
var root = document.querySelector('#root');


function render(state){
    // console.log(state.links)
    if(!state.links.includes('Blog')){
        state.posts = [];
        
        axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                state.posts = response.data;
               
                root.innerHTML = `
                ${Navigation(state.links)}
                ${Header(state.title)}
                ${Content(state.posts)}
                ${Footer(state)}
                `;
            });
    }

    root.innerHTML = `
                ${Navigation(state.links)}
                ${Header(state.title)}
                ${Content(state.posts)}
                ${Footer(state)}
                `;

    router.updatePageLinks();
}

function navHandler(params){
    var destination = startCase(params.page);
   
    render(State[destination]);
}

router
    .on('/:page', navHandler)
    .on('/', () => navHandler({ 'page': 'Home' }))
    .resolve();