const newScrape = document.getElementById("newScrape");
const articles = document.getElementById("articleHub");
const articleArray = [];


newScrape.addEventListener("click", event => {
    event.preventDefault();

    $.ajax({
        type: "GET",
        url: "/scrape",
        success: function (response) {

            //TODO forEach() method on array to generate the following html for each article
            response.forEach(article => {
                console.log(article.title, article.link, article.teaser))
        }

            //TODO append method for html. I think that's just jQuery though?

            articles.innerHTML =
            `
            <div class="scraped-article z-depth-4">
                <div class="row">
                    <h4 class="scraped-title col s10">Article Title</h4>
                    <button class="col s2 btn waves-effect waves-light center-align" id="saveArticle">
                        Save Article
                    </button>
                </div>
                <p class="scraped-teaser">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolorem consequatur
                    pariatur accusamus repellendus expedita amet. Nobis beatae explicabo vero ratione, excepturi enim! Incidunt repudiandae sint, animi commodi nostrum sequi?
                </p>
             </div>
        `

    }
    })
})