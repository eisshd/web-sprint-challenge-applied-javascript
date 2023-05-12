import axios from "axios"
import { articles } from "../mocks/data.js"

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  const card = document.createElement('div')
  // const headline = document.createElement('div')
  const author = document.createElement('div')
  const imgCont = document.createElement('div')
  // const imgSrc  = document.createElement('img')
  // const span = document.createElement('span')
  
  card.classList.add('card')
  // headline.classList.add('headline')
  author.classList.add('author')
  imgCont.classList.add('img-container')
  
  // card.appendChild(headline)
  
  author.appendChild(imgCont)
  // imgCont.appendChild(imgSrc)
  // author.appendChild(span)

  // headline.textContent = article.headline
  article.forEach(element => {
    const headline = document.createElement('div')
    const span = document.createElement('span')
    const imgSrc  = document.createElement('img')
    headline.classList.add('headline')
    headline.textContent = element.headline
    span.textContent = element.authorName
    imgSrc.src = element.authorPhoto
    card.appendChild(headline)
    author.appendChild(span)
    imgCont.appendChild(imgSrc)
  });
  
 card.appendChild(author)
  // span.textContent = article.authorName
  // imgSrc.src = article.authorPhoto

  return card
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  const card = document.querySelector(selector)
  const javaDiv = document.querySelector('.javascript')

  axios.get('http://localhost:5001/api/articles')
       .then((res) => {
            const data = Card(res.data.articles.javascript)
            console.log(res.data.articles.javascript)
            card.appendChild(data)
       })
  

  return card
}

export { Card, cardAppender }
