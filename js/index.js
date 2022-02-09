import { articleArray } from "./article.js";

function mainIndex(){
    let divPerArticle = ''
    for (const articleItem of articleArray) {

        // get main article body 
        divPerArticle +=  `<h2 class="categoryHeading">`+articleItem[1].category+`</h2><div class='gridArticle'>`;

        // console.log(divPerArticle)
        for (let index = 0; index < articleItem.length; index++) {
            
            let article = articleItem[index];
            let articleId = 543;
            divPerArticle += 
            `<div class="mainArticle">
                <div class="divArticle">
                    <img class="articleImage" src="images/`+article.category+`/`+article.Image+`" alt="">
                </div>
                <div class="divArticle">
                    <h3 class='title'>`+
                        article.title
                    +`</h3>
                    <span class='date'>Date:`+article.Date+` in</span> <span class='tag'>`+article.tag+`</span>
                </div>
                <div class="col-span-2"><p>`+
                    article.article+
                    `<br>
                    <span>continue reading</span>
                </div>
            </div>`
            
        }
        divPerArticle += `</div>`
    }
    document.getElementById('articleBody').innerHTML = divPerArticle;
}
mainIndex()
