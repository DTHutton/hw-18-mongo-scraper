
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
            articleArray[0].forEach(({ title, link, teaser }) => {
                const articleTemplate = `
                    <div class="scraped-article z-depth-4">
                        <div class="row">
                            <a href=${link}>
                                <h4 class="scraped-title col s10">${title}</h4>
                            </a>
                            <button class="col s2 btn waves-effect waves-light center-align" id="saveArticle">
                                Save Article
                            </button>
                        </div>
                        <hr/>
                        <p class="scraped-teaser">${teaser}</p>
                    </div>
                `

                $("#articleHub").append(articleTemplate)
            })
        }
    })
})