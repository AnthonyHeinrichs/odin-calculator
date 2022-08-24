window.onload = function() {

  const numButtons = document.getElementsByClassName('numButtons')
  const funButtons = document.getElementsByClassName('funButtons')

  Array.from(numButtons).forEach( (button) => {
    button.addEventListener('click', () => {
      console.log(button.innerText)
    })
  })

  Array.from(funButtons).forEach ((button) => {
    button.addEventListener('click', () => {
      {console.log(button.innerText)}
    })
  })
}