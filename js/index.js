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
                    <h5>`+article.author+`</h5>
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
// category for top menu 

for (const getCategory of articleArray) {
    const getId = document.getElementById('category');
    const li = document.createElement('li');
    const a = document.createElement('a')
    a.setAttribute('href', getCategory[0].category)
    li.appendChild(a);
    getId.appendChild(li);
    a.innerText = getCategory[0].category
    console.log(getCategory[0].category)    
}