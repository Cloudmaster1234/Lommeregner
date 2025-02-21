let num1, num2
let plus, minus, gange, division
let svar, overskrift

function setup() {
  createCanvas(windowWidth, windowHeight)
  
  // Input felter
  num1 = createInput('')
  num1.position((windowWidth / 2) - 100, windowHeight / 2 - 50)
  
  num2 = createInput('')
  num2.position((windowWidth / 2) + 20, windowHeight / 2 - 50)
  
  // Knapper
  //plus knappen
  plus = createButton('+')
  plus.position((windowWidth / 2) - 100, windowHeight / 2)
  plus.mousePressed(() => calculate('+'))
  
  //minus knappen
  minus = createButton('-')
  minus.position((windowWidth / 2) - 60, windowHeight / 2)
  minus.mousePressed(() => calculate('-'))
  
  //gange knappen
  gange = createButton('*')
  gange.position((windowWidth / 2) - 20, windowHeight / 2)
  gange.mousePressed(() => calculate('*'))
  
  //division knappen
  division = createButton('/')
  division.position((windowWidth / 2) + 20, windowHeight / 2)
  division.mousePressed(() => calculate('/'))
  
  // Resultat
  svar = createP('Resultat: ')
  svar.position((windowWidth / 2) - 50, windowHeight / 2 + 50)
}

function calculate(operator) {
  let num1Value = parseFloat(num1.value())
  let num2Value = parseFloat(num2.value())
  let result
  
  if (isNaN(num1Value) || isNaN(num2Value)) {
    svar.html('Indtast venligst to tal!')
    return
  }
  
  switch (operator) {
    case '+': result = num1Value + num2Value; break
    case '-': result = num1Value - num2Value; break
    case '*': result = num1Value * num2Value; break
    case '/': 
      if (num2Value === 0) {
        svar.html('er du dum man kan ikke gange med 0')
        return
      }
      result = num1Value / num2Value
      break
  }
  
  svar.html('Resultat: ' + result)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
  setup(); // Genplacer elementer ved vinduesændring
}
