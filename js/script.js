// Selecionando Elementos

const multiplicationForm = document.getElementById("multiplication-form")
const numberInput = document.getElementById("number")
const multiplicatorInput = document.getElementById("multiplicator")
const multiplicationTable = document.getElementById("multiplication-operations")


// Funções

const createTable = (number, multiplicatorNumber) => {
  
  for(x = 1; x <= multiplicatorNumber; x++){
    const result = number * x
    
    const tableResult = `<div class="row">
    <div class="operation">${number} x ${x} = ${result}</div></div>`
    
    const parser = new DOMParser ()

    const htmlTemplate = parser.parseFromString(tableResult, "text/html")

    const p = document.getElementById("p")
    
    p.style.display = "none"

    const row = htmlTemplate.querySelector(".row")

    multiplicationTable.appendChild(row)
  }
}

// Eventos

multiplicationForm.addEventListener("submit", (e) => {
  e.preventDefault()
  
  const multiplicationNumber = +numberInput.value

    const multiplicatorNumber = +multiplicatorInput.value

    
    if(!multiplicatorNumber || !multiplicationNumber) return

    createTable(multiplicationNumber, multiplicatorNumber)
  })