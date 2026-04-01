const Div=document.createElement("div")
Div.style.width="200px"
Div.style.margin="50px auto"
Div.style.textAlign="center"
Div.style.border="1px solid black"
Div.style.padding="20px"
Div.style.borderRadius="10px"
Div.style.boxShadow="0 0 10px rgba(0,0,0,0.1)"
document.body.appendChild(Div)

const H1=document.createElement("h1")
H1.textContent="Counter"
H1.style.marginBottom="20px"
H1.style.fontFamily="Arial, sans-serif"
H1.style.color="#333"
H1.style.fontSize="24px"
H1.style.fontWeight="bold"
Div.appendChild(H1)

const p=document.createElement("p")
p.textContent=0
p.style.fontSize="48px"
p.style.fontWeight="bold"
p.style.color="#007BFF" 
p.style.fontWeight="bold"
p.style.transition="color 0.3s ease"
Div.appendChild(p)

const buttonplus=document.createElement("button")
buttonplus.textContent= "+"
buttonplus.style.marginRight="10px"
buttonplus.style.padding="10px 20px"
buttonplus.style.fontSize="16px"
buttonplus.style.cursor="pointer"   
buttonplus.style.backgroundColor="#28a745"
buttonplus.style.border="none"
buttonplus.style.borderRadius="5px"
buttonplus.style.color="white"
buttonplus.style.fontWeight="bold"
Div.appendChild(buttonplus)

const buttonminus=document.createElement("button")
buttonminus.textContent= "-"
buttonminus.style.marginLeft="10px"
buttonminus.style.padding="10px 20px"
buttonminus.style.fontSize="16px"
buttonminus.style.cursor="pointer"
buttonminus.style.backgroundColor="#dc3545"
buttonminus.style.border="none"
buttonminus.style.borderRadius="5px"
buttonminus.style.color="white"
buttonminus.style.fontWeight="bold"
Div.appendChild(buttonminus)

let valore= 0

buttonplus.addEventListener("click", function(){
valore++
p.textContent= valore
})


buttonminus.addEventListener("click", function(){

if (valore===0) {
    return;
}

valore--
p.textContent= valore
})