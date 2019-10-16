
const newScrape = document.getElementById("newScrape");
const articles = document.getElementById("articleHub");
const articleArray = [];

newScrape.addEventListener("click", event => {
    event.preventDefault();

    $.ajax({
        type: "GET",
        url: "/scrape",
        success: function (response) {
            articleArray.push(response)
            console.log(articleArray)
            //TODO forEach() method on array to generate the following html for each article
            articleArray.forEach(({ link, title, teaser }) => {
                //TODO append method for html. I think that's just jQuery though?
                console.log(title, link, teaser)
                articles.innerHTML = `
                    <div class="scraped-article z-depth-4">
                        <div class="row">
                            <h4 class="scraped-title col s10" href=${link}>${title}</h4>
                            <button class="col s2 btn waves-effect waves-light center-align" id="saveArticle">
                                Save Article
                            </button>
                        </div>
                        <p class="scraped-teaser">${teaser}</p>
                    </div>
                `
            })

        }
    })
})