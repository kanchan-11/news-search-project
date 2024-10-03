const API_KEY = "ed77d1e0e8374951a9c732b5e473e379";

const blog_container = document.getElementById("blog-container");

async function fetchNews(){
    try{
        const URL  = `https://newsapi.org/v2/top-headlines?country=us&pageSize=10&apiKey=${API_KEY}`;
        const response = await fetch(URL,{
            headers: {
                // 'Content-Type': 'application/json; charset=utf-8',
                // 'Access-Control-Allow-Origin': '*',
                // 'Accept': 'application/json',
            // 'Authorization': `${API_KEY}`,
        
            }
        });
        const data = await response.json();
        console.log("data",data);
        return data.articles;
    }
    catch(error){
        return error;
    }
}
(async ()=>{
    try{
        const articles = await fetchNews();
        displayArticles(articles)
        console.log(articles)
    }
    catch(error){
        console.error(`Following error came while fetching the news: ${error}`)
    }
})();

function displayArticles(articles){
    blog_container.innerHTML=""
    articles.forEach(article => {
        const card = document.createElement("div")
        card.classList.add("blog-card");

        const img = document.createElement("img");
        img.src=article.urlToImage;
        img.alt=article.title;

        const title=document.createElement("h2")
        title.textContent=article.title;

        const description = document.createElement("p")
        description.textContent=article.description;

        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(description);

        blog_container.appendChild(card);
    });
}