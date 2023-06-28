import axios from "axios"
// 👉 TASK 1- Test out the following endpoints:

//  https://dog.ceo/api/breeds/image/random

//  * With Firefox and the Network Tab
//  * With JS using the native fetch [STRETCH]


// 👉 TASK 2- Select the "entry point", the element
// inside of which we'll inject our dog cards 
const entryPoint = document.querySelector(".entry")


// 👉 TASK 3- `dogCardMaker` takes an object and returns a Dog Card.
// Use this function to build a Card, and append it to the entry point.
/*
   <div class="dog-card">
     <img class="dog-image">
     <h3>
   </div>
 */
function dogCardMaker({ imageURL, breed}) {

  const card=document.createElement("div")
  const img = document.createElement("img")
  const h3 = document.createElement("h3")
  card.className ="dog-card"
  img.className ="dog-image"
  img.src=imageURL
  h3.textContent=`Breed: ${breed}`
  card.appendChild(img)
  card.appendChild(h3)

  card.addEventListener("click",()=>{
    card.classList.toggle("selected")
  })
 
   
  return card
  
}



// const butt=document.createElement("button")
// butt.textContent="get some doggies"
// butt.style.display="block"
// butt.style.alignItems="center"
// butt.style.width="100%"
// document.querySelector(".container h3").prepend(butt)

// for (let i=0; i<6;i++){
//   axios.get("https://dog.ceo/api/breeds/image/random")
//     .then(res => {
//       const element = dogCardMaker({ imageURL: res.data.message, breed: "cancui" })
//       entryPoint.appendChild(element)
//     })
//     .catch(err => {
//       console.error(err)
//     })
//     .finally(() => {
//       console.log("finished")
//     })
// }
axios.get("https://dog.ceo/api/breeds/image/random/5")
    .then(res => {
      //console.log(res.data.message)
      res.data.message.forEach((imgs)=> {
        const element = dogCardMaker({ imageURL: imgs, breed: "cancui" })
        entryPoint.appendChild(element)
        
      });
      
    })
    .catch(err => {
      console.error(err)
    })
    .finally(() => {
      console.log("finished")
    })





// 👉 TASK 4- Bring the Axios library into the project using one of two methods:
//    * Traditional way: put another script tag inside index.html (`https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js`)
//    * Projects with npm: install it with npm and import it into this file


// 👉 TASK 5- Fetch dogs from `https://dog.ceo/api/breed/{breed}/images/random/{number}`
//    * ON SUCCESS: use the data to create dogCards and append them to the entry point
//    * ON FAILURE: log the error to the console
//    * IN ANY CASE: log "done" to the console


// 👉 (OPTIONAL) TASK 6- Wrap the fetching operation inside a function `getDogs`
// that takes a breed and a count (of dogs)


// 👉 (OPTIONAL) TASK 7- Put a button in index.html to 'get dogs' and add a click
// event listener that executes `getDogs`


// 👉 (OPTIONAL) TASK 8- Import the breeds from `breeds.js`
// and loop over them, fetching a dog at each iteration
