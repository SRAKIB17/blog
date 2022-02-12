import { articleArray } from "./article.js";

// search control input box 
let searchBtn = document.getElementById('SearchIcon');
searchBtn.onclick = showSearchBox;
function showSearchBox(){
    document.getElementById('search-input').style.display = 'inline'
    document.getElementById('result').style.display = 'block'
    searchBtn.onclick = closeSearchBox;
}

function closeSearchBox(){
    document.getElementById('result').style.display = 'none'
    document.getElementById('search-input').style.display = 'none'
    searchBtn.onclick = showSearchBox;
}

// keyup function auto show result
let searchQ = ''
document.getElementById('search-input').addEventListener('keyup', function(event){
    let wait = '<div id="busyGIF"><img src="images/busy.gif"  alt=""></div>'
    document.getElementById('busy').innerHTML = wait;
    searchQ = event.target.value;
    setTimeout(resultReturn,1000)

})


document.getElementById('search-input').addEventListener('change',function(event){
    let wait = '<div id="busyGIF"><img src="images/busy.gif" alt=""></div>'
    document.getElementById('busy').innerHTML = wait;
    searchQ = event.target.value;
    setTimeout(resultReturn,800);
})



let searchResult = []

function resultReturn(){
    let searchKey = searchQ;
    let convertKeyReg = new RegExp(searchKey, 'gi');
    let resultShow = `
        <table id="showingResultTable">
            <tr>
                <th>Blog</th>
                <th>Category</th>
            </tr>`
    for (let articleItem of articleArray) {

        for (let index = 0; index < articleItem.length; index++) {
            
            // get each item from product
            let getArticle = articleItem[index]
            
            // condition apply

            if (searchKey === ' ' || searchKey == ''){
                resultShow = `
                    <div>
                        <h2 class="searchNotFound">Not Found 😢</h2>
                    </div>`
            }

            // product title access 
            else if (getArticle.title.search(convertKeyReg) >= 0){
                // get push result 
                searchResult.push(getArticle)
                // title title 
                let text = getArticle.title.substring(0,26);
                // index search match 
                let Index = text.search(convertKeyReg);
                // matching quiry 
                let getMatch = text.substring(Index, Index+searchKey.length)

                // text split 
                let splitText = text.split(getMatch)
                // heighlight by color 
                text = splitText.join("<span class='highlight'>"+getMatch+ "</span>")

                resultShow += `
                    <tr>
                        <td>
                            <img src="images/`+getArticle.category+`/`+getArticle.Image+`" alt="" class="cartImage">`+text+`.....
                        </td>
                        <td>`
                            +getArticle.category+`
                        </td>
                    </tr>`
                
            }

            // product category
            else if ( getArticle.category.search(convertKeyReg) >= 0){
                // get and push
                searchResult.push(getArticle)

                // title title 
                let text = getArticle.category;
                // index search match 
                let Index = text.search(convertKeyReg);
                // matching quiry 
                let getMatch = text.substring(Index, Index+searchKey.length)

                // text split 
                let splitText = text.split(getMatch,5)
                // heighlight by color 
                text = splitText.join("<span class='highlight'>"+getMatch+"</span>")
                
                resultShow += `
                    <tr width="100">
                        <td>
                            <img src="images/`+getArticle.category+`/`+getArticle.Image+`" alt="" class="cartImage">`+getArticle.title.slice(0,20)+`....
                        </td>
                        <td>`
                            +text+`
                        </td>
                    </tr>`
            }
            else if(searchResult.length == 0){
                resultShow = `
                    <div>
                        <h2 class="searchNotFound">Not Found 😢</h2>
                    </div>`
            }
        }
    }
    resultShow += `</table>`
    console.log(resultShow)
    document.getElementById('busy').innerHTML = resultShow;
    return searchResult = [];
}

