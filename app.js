const Div = document.createElement("div")
Div.classList.add("counter-container")
document.body.appendChild(Div)

const H1 = document.createElement("h1")
H1.textContent = "Counter"
H1.classList.add("counter-title")
Div.appendChild(H1)

const p = document.createElement("p")
p.textContent = 0
p.classList.add("counter-value")
Div.appendChild(p)

const buttonsDiv = document.createElement("div")
buttonsDiv.classList.add("counter-buttons")
Div.appendChild(buttonsDiv)

const buttonplus = document.createElement("button")
buttonplus.textContent = "+"
buttonplus.classList.add("btn-plus")
buttonsDiv.appendChild(buttonplus)

const buttonminus = document.createElement("button")
buttonminus.textContent = "-"
buttonminus.classList.add("btn-minus")
buttonsDiv.appendChild(buttonminus)

let valore = 0

buttonplus.addEventListener("click", function () {
    valore++
    p.textContent = valore
})

buttonminus.addEventListener("click", function () {
    if (valore === 0) {
        return
    }
    valore--
    p.textContent = valore
})
