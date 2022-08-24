window.onload = function() {

  const showCalcSteps = document.getElementById('calcSteps')
  const showCalcResults = document.getElementById('calcResults')
  const equals = document.getElementById('equals')

  const numButtons = document.getElementsByClassName('numButtons')
  const funButtons = document.getElementsByClassName('funButtons')

  let didCalculate = false

  const calculate = () => {
    console.log('calculate')
  }

  Array.from(numButtons).forEach( (button) => {
    button.addEventListener('click', () => {
      let steps = showCalcSteps.innerText
      let checkForDecimal = steps.split(/[\+\-\÷\×]/).pop()

      if (didCalculate) {
        steps = ''
        didCalculate = false
      }

      console.log(didCalculate)
      
      if (isNaN(steps[steps.length - 1 ]) && 
        !((steps[steps.length - 1 ]) === '.')) {
          showCalcSteps.innerText = steps + ' ' + button.innerText
      } else if ((button.innerText === '.') && checkForDecimal.indexOf('.') === -1) {
        showCalcSteps.innerText = steps + button.innerText
      } else if ((button.innerText !== '.')) {
        showCalcSteps.innerText = steps + button.innerText
      }
    })
  })

  Array.from(funButtons).forEach ((button) => {
    button.addEventListener('click', () => {
      let steps = showCalcSteps.innerText

      if (didCalculate) {
        showCalcSteps.innerText = 'Add calculation results back up here'
        didCalculate = false
      }

      if (isNaN(steps[steps.length - 1 ])) {
        return
      } else {
        buttonText = button.innerText
        showCalcSteps.innerText = showCalcSteps.innerText + ' ' + buttonText + ' '
      }
    })
  })

  equals.addEventListener('click', () => {
    showCalcSteps.innerText = showCalcSteps.innerText + ' ' + '='

    calculate() 
    showCalcResults.innerText = 'Add calculation'

    didCalculate = true
  })
}