window.onload = function() {

  let calcSteps = document.getElementById('calcSteps')
  let calcResults = document.getElementById('calcSolution')

  const numButtons = document.getElementsByClassName('numButtons')
  const funButtons = document.getElementsByClassName('funButtons')

  Array.from(numButtons).forEach( (button) => {
    button.addEventListener('click', () => {
      let steps = calcSteps.innerText
      let checkForDecimal = steps.split(/[\+\-\÷\×]/).pop()
      if (isNaN(steps[steps.length - 1 ]) && 
        !((steps[steps.length - 1 ]) === '.')) {
          calcSteps.innerText = steps + ' ' + button.innerText
      } else if ((button.innerText === '.') && checkForDecimal.indexOf('.') === -1) {
        calcSteps.innerText = steps + button.innerText
      } else if ((button.innerText !== '.')) {
        calcSteps.innerText = steps + button.innerText
      }
    })
  })

  Array.from(funButtons).forEach ((button) => {
    button.addEventListener('click', () => {
      let steps = calcSteps.innerText
      if (isNaN(steps[steps.length - 1 ])) {
        return
      } else {
        buttonText = button.innerText
        calcSteps.innerText = calcSteps.innerText + ' ' + buttonText + ' '
      }
    })
  })
}