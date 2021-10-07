var n=1;

const createCardNode = ()=>{
    const imagen = document.createElement("img")
    // debugger
    imagen.src=`./images/illustration-hero.svg` 
    const imageContainer = document.createElement("div")
    imageContainer.className = "illustration-hero"
    const titulo = document.createElement("h1")
    titulo.className = "titulo"
    const title = document.createTextNode('Order Summary')
    titulo.appendChild(title)
    const parrafo = document.createElement("p")
    parrafo.className = "description"
    const text = document.createTextNode('You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!')
    parrafo.appendChild(text)

    const plan = document.createElement("section")
    plan.className= "partes"
    const img = document.createElement("div")
    const imgMus = document.createElement("img")
    imgMus.src = "./images/icon-music.svg"
    img.appendChild(imgMus)
    plan.appendChild(img)
    const type = document.createElement("div")
    type.className = "plan_type-plan"
    const anualPlan = document.createElement("span")
    const textPlan = document.createTextNode('Annual Plan')
    const enter = document.createElement("br")
    anualPlan.appendChild(textPlan)
    anualPlan.appendChild(enter)
    const year = document.createElement("span")
    const textYear = document.createTextNode('$59.99/year')
    year.appendChild(textYear)
    type.appendChild(anualPlan)
    type.appendChild(year)
    plan.appendChild(type)
    const change = document.createElement("div")
    const changeLink = document.createElement("a")
    changeLink.href= "/"
    const changeText = document.createTextNode('Change')
    changeLink.appendChild(changeText)
    change.appendChild(changeLink)
    plan.appendChild(change)

    const buttons = document.createElement("section")
    buttons.className= "button-container"
    const buttonPayment = document.createElement("button")
    buttonPayment.className="button-container__payment"
    const buttonPText = document.createTextNode('Proceed to Payment')
    buttonPayment.appendChild(buttonPText)
    buttons.appendChild(buttonPayment)
    const buttonCancel = document.createElement("button")
    buttonCancel.className = "button-container__cancel"
    const buttonCText = document.createTextNode('Cancel Order')
    buttonCancel.appendChild(buttonCText)
    buttons.appendChild(buttonCancel)

    const card = document.createElement("div")
    card.className="card"
    card.id="card"+n;
    n=n+parseInt(1);
    imageContainer.appendChild(imagen)
    card.appendChild(imageContainer)
    card.appendChild(titulo)
    card.appendChild(parrafo)
    card.appendChild(plan)
    card.appendChild(buttons)
    return card
}

const mountNode = document.querySelector("#app")
const addCardButton = document.querySelector("#button") 
const removeCardButton = document.querySelector("#buttonB") 

const addCard=()=>{
    mountNode.appendChild(createCardNode())
}
const removeCard=()=>{
    if (n>1) {
        n=n-parseInt(1);
        var card = document.getElementById("card"+n);
        mountNode.removeChild(card)
    }    
}    
    

addCardButton.addEventListener('click', addCard)
removeCardButton.addEventListener('click', removeCard)