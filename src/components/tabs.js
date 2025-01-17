import axios from "axios"
import { topics } from "../mocks/data.js"

const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //

  const tops = document.createElement('div')
  tops.classList.add('topics')
  
  topics.forEach(element => {
      const tabDiv = document.createElement('div')
      tabDiv.id = element
      tabDiv.classList.add('tab')
      tabDiv.textContent = element
      tops.appendChild(tabDiv)
  });

  return tops
}

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5001/api/topics` (test it with a console.log!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //

  const tabsCont = document.querySelector(selector)
  

 axios.get(`http://localhost:5001/api/topics`)
      .then((res) => {
            const tabs = Tabs(res.data.topics)
            tabsCont.appendChild(tabs)
          })

  return tabsCont
}

export { Tabs, tabsAppender }
