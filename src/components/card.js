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
  const headline = document.createElement('div')
  const author = document.createElement('div')
  const imgCont = document.createElement('div')
  const imgSrc  = document.createElement('img')
  const span = document.createElement('span')
  
  card.classList.add('card')
  headline.classList.add('headline')
  author.classList.add('author')
  imgCont.classList.add('img-container')
  
  card.appendChild(headline)
  card.appendChild(author)
  author.appendChild(imgCont)
  imgCont.appendChild(imgSrc)
  author.appendChild(span)
  
  headline.textContent = article.headline
  span.textContent = article.authorName
  imgSrc.src = article.authorPhoto
 
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

  const cardSelector = document.querySelector(selector)
  const javaDiv = document.querySelector('#javascript')
  const bsDiv = document.querySelector('#bootstrap')
  const techDiv = document.querySelector('#technology')
  const jqDiv = document.querySelector('#jquery')
  const nodeDiv = document.querySelector('#node.js')

  axios.get('http://localhost:5001/api/articles')
    .then((res) => {
                const dataJS = res.data.articles.javascript
                console.log(dataJS)

                const javaElements = dataJS.map((array) => {
                  let article = Card(array)
                  return article
                })

                javaElements.forEach(element => {
                cardSelector.appendChild(element)
                })
                
                const dataBS = res.data.articles.bootstrap
                console.log(dataBS)

                const bootElements = dataBS.map((array) => {
                  let article = Card(array)
                  return article
                })

                bootElements.forEach(element => {
                cardSelector.appendChild(element)
                })

                const dataTECH = res.data.articles.technology
                console.log(dataTECH)

                const techElements = dataTECH.map((array) => {
                  let article = Card(array)
                  return article
                })

                techElements.forEach(element => {
                cardSelector.appendChild(element)
                })

                const dataJQ = res.data.articles.jquery
                console.log(dataJQ)

                const jqElements = dataJQ.map((array) => {
                  let article = Card(array)
                  return article
                })

                jqElements.forEach(element => {
                cardSelector.appendChild(element)
                })

                const dataNODE = res.data.articles.node
                console.log(dataNODE)

                const nodeElements = dataNODE.map((array) => {
                  let article = Card(array)
                  return article
                })

                nodeElements.forEach(element => {
                cardSelector.appendChild(element)
                })
      })

  return cardSelector
}

export { Card, cardAppender }
