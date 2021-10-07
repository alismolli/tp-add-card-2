import {getRandomInt} from './random.js'


const createCardNode = ()=>{
    const imagen = document.createElement("img")
    // debugger
    imagen.src=`https://source.unsplash.com/random/}` 
    const imageContainer = document.createElement("div")
    imageContainer.className = "image-container"
    const parrafo = document.createElement("p")
    parrafo.className = "description"
    const text = document.createTextNode('J ai deux amours Mon pays et Paris Par eux toujours Mon coeur est ravi Ma savane est belle Mais à quoi bon le nier Ce qui mensorcelle Cest Paris, Paris tout entier Le voir un jour Cest mon rêve joli Jai deux amours')
    parrafo.appendChild(text)
    const card = document.createElement("div")
    card.className="card"

    imageContainer.appendChild(imagen)
    card.appendChild(imageContainer)
    card.appendChild(parrafo)


        // <header>
        //    <img src ="./images/illustration-hero.svg" alt="Hero de niña escuchando música">
        // </header>
        // <main>
        //   <h1>Order Summary</h1>
        //   <p>You can now listen to millions of songs, audiobooks, and podcasts on any 
        //     device anywhere you like!</p>
        //     <section class="plan">
        //       <div>
        //         <img src="./images/icon-music.svg" alt ="">
        //       </div>
        //       <div class="plan__type-plan">
        //         <span>Annual Plan</span>
        //         <span> $59.99/year</span>
        //       </div>
        //       <div>
        //         <a href="/">Change</a>
        //       </div>
        //     </section>
        // </main>
        //     <section class="button-container">
        //       <button class="button-container__payment">Proceed to Payment</button>
        //       <button class="button-container__cancel">Cancel Order</button>
        //     </section>

    return card
}

const mountNode = document.querySelector("#app")
const addCardButton = document.querySelector('button') 

const addCard=()=>{
    mountNode.appendChild(createCardNode())
}

addCardButton.addEventListener('click', addCard)
