function linkBuilder(linksArr){
    var i = 0;
    var linksHTML = '';

    while(i < linksArr.length){
        linksHTML += `<li><a href="./${linksArr[i]}">${linksArr[i]}</a></li>`;
        i++;
    }

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
/*  <div id="navigation">
        <ul class="container">
        <li><a href="../index.html">Home</a></li>
        <li><a href="../blog/index.html">Blog</a></li>
        <li><a href="../contact/index.html">Contact</a></li>
        <li><a href="../projects/index.html">Projects</a>
            <ul>
              <li><a href="#">First</a></li>
              <li><a href="#">Second</a></li>
              <li><a href="#">Third</a></li>
            </ul>
          </li>
        </ul>
      </div> */