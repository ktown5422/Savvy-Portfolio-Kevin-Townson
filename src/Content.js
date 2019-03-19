export default function Content(posts){
    console.log('content says', posts);
    
    return `
    <div id="content">
        <section class="minipic">
          <img src="https://avatars1.githubusercontent.com/u/17262777?s=460&v=4" alt="Handsome Pic Me"/>
          <div class="minipic-content">
                <h1>Savvy Coder | Cyber Entreprenuer</h1>



                <p>Hi, Im Kevin Townson a web developer in the Savvy Coders Cohort January 2019, Im Learning to write better
                HTML/CSS and getting a more structured understanding of the JavaScript Programming Language.</p>






                <p>below are links to my social accounts check them out</p>

                <a class="action-btn" href="mailto:ktown5422@gmail.com?Subject=Contact%20Form"><span class="tent-word">Hire Me</span></a>
          </div>
        </section>
    </div>
    `;
}
