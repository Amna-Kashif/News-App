const cardDiv = document.getElementById('cardSection');
const input = document.getElementById('inputField');


let search = () => {

    const API_KEY = `https://newsapi.org/v2/everything?q=${input.value}&from=2024-12-07&sortBy=publishedAt&apiKey=b6d72b8f1a084f0d9ab2ca83d042c7fc`
    console.log(API_KEY);
    

fetch(API_KEY)
.then((res) => res.json())
.then((data) => {
    data.articles.map((e, i) => {
        console.log(e);

        cardDiv.innerHTML += `<div class="card mb-3 text-center container" style="width: 18rem; height:200px border-radius: 12px; background-color: #fff; box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px; transition: transform 0.3s ease;">
  <img src="${e.urlToImage}" class="card-img-top" alt="..." style="border-top-left-radius: 12px; border-top-right-radius: 12px;">

  <div class="card-body ">
    <h5 class="card-title" style="font-size: 1.25rem; font-weight: bold; color: #333; margin-bottom: 10px;">${e.title}</h5>
    
    <p class="card-text" style="font-size: 1rem; color: #555; margin-bottom: 15px;">${e.description}</p>
    
    <a href="${e.url}" class="btn btn-primary" style="background-color: #3498db; border: none; padding: 8px 20px; font-size: 1rem; border-radius: 20px; transition: background-color 0.3s ease;">
      Read More
    </a>
  </div>
</div>
        `
    })
})
.catch((err) => {
    console.log(err);
    
});
}