window.onload = function() {

  const numButtons = document.getElementsByClassName('numButtons')

  Array.from(numButtons).forEach( (button) => {
    button.addEventListener('click', () => 
      {console.log(button.innerText)})
  })
}