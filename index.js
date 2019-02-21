import Navigation from './src/Navigation';
import Header from './src/Header';
import Content from './src/Content';
import Footer from './src/Footer';
import nameChecker from './src/Greeter';

var root = document.querySelector('#root');

root.innerHTML = `
${Navigation()}
${Header()}
${Content()}
${Footer()}

`;

nameChecker();