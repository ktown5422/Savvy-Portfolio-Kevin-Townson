import { lowerCase } from 'lodash';

function linkBuilder(links){
    // var linksHTML = '';
    
    var linksHTML = links.map((link) => {
        var destination = '';

        if(link !== 'Home'){
            destination = lowerCase(link);
        }

      
        return `<li> 
            <a data-navigo href="./${destination}">
            ${link}
            </a>
          </li>
        `;
    }).join('');

    return linksHTML;
}

export default function Navigation(links){
    return `

    <div id="navigation">
      <ul class="container">
        ${linkBuilder(links)}
      </ul>
    </div>

    `;
}