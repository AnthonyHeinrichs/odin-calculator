window.onload = function() {

  const showCalcSteps = document.getElementById('calcSteps')
  const showCalcResults = document.getElementById('calcResults')
  const equals = document.getElementById('equals')

  const numButtons = document.getElementsByClassName('numButtons')
  const funButtons = document.getElementsByClassName('funButtons')

  let didCalculate = false

  let addItUp = 0

  const calculate = (props) => {

    props ? addItUp = props : addItUp = 0

    let steps = showCalcSteps.innerText.slice(0, -1)
    let splitSteps = steps.split(/([\+\﹣\÷\×])/)
  
    for (let i = 0; i <= splitSteps.length; i++) {
      if (i % 2 === 0) {
        splitSteps[i] = parseFloat(splitSteps[i])
      }
    }

    for (let i = 0; i <= splitSteps.length; i++) {
      if (i % 2 !== 0) {
        switch (splitSteps[i]) {
          case '+': 
            addItUp += (splitSteps[i - 1] + splitSteps[i + 1])
            break
          case '﹣':
            addItUp += (splitSteps[i - 1] - splitSteps[i + 1])
            break
          case '÷':
            addItUp =+ (splitSteps[i - 1] / splitSteps[i + 1])
            break
          case '×':
            addItUp =+ (splitSteps[i - 1] * splitSteps[i + 1])
            break
          default:
            break
        }
      }
      showCalcResults.innerText = addItUp
    }
  }

  Array.from(numButtons).forEach( (button) => {
    button.addEventListener('click', () => {
      let steps = showCalcSteps.innerText
      let checkForDecimal = steps.split(/[\+\﹣\÷\×]/).pop()

      if (didCalculate) {
        addItUp = 0
        didCalculate = false
      }

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
      let splitSteps = showCalcSteps.innerText.split(/([\+\﹣\÷\×\=])/)
    
      if (didCalculate) {
        showCalcSteps.innerText = addItUp + ' ' + button.innerText
        didCalculate = false
      }

      if (isNaN(steps[steps.length - 1 ])) {
        return
      } else {
        buttonText = button.innerText
        showCalcSteps.innerText = showCalcSteps.innerText + ' ' + buttonText + ' '
      }

      if (splitSteps.length === 3) {
        calculate()
        showCalcSteps.innerText = addItUp + ' ' + button.innerText
        didCalculate = true
      }
    })
  })

  equals.addEventListener('click', () => {
    let splitSteps = showCalcSteps.innerText.split(/([\+\﹣\÷\×\=])/)
    console.log(splitSteps)
    
    if (splitSteps[splitSteps.length - 1] === '') {
      addItUp = splitSteps[0]
      showCalcResults.innerText = splitSteps[0]
      didCalculate = true
    } else {
      calculate() 
      didCalculate = true
    }
  })
}