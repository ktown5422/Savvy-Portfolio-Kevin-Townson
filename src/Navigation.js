import { lowerCase } from 'lodash';

function linkBuilder(links){
    var linksHTML = '';
    var destination = '';
    
    links.forEach((link) => {
        if(link !== 'Home'){
            destination = lowerCase(link);
        }

        linksHTML += `
        
          <li> 
            <a data-navigo href="./${destination}">
            ${link}
            </a>
          </li>
        `;
    });

    return linksHTML;
}

export default function Navigation(state){
    return `

    <div id="navigation">
      <ul class="container">
        ${linkBuilder(state.links)}
      </ul>
    </div>

    `;
}