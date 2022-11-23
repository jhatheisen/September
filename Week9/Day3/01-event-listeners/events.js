// Your code here
window.addEventListener('DOMContentLoaded', event => {
  alert('Dom Loaded');

  // input red
  let redIn = document.body.querySelector('#red-input');
  redIn.addEventListener('input', changeRed);

  function changeRed(event) {
      let text = redIn.value;
      console.log(text);
      if (text === 'red') {
        redIn.style.backgroundColor = 'red';
      } else {
        redIn.style.backgroundColor = 'transparent';
      }
  }

  // add item press
  let addItem = document.body.querySelector('#add-item');
  let ul = document.body.querySelector('ul');
  addItem.addEventListener('click', addLi);

  function addLi(event) {
    let li = document.createElement('li');
    let val = document.body.querySelector('#list-add').value;
    li.innerHTML = val;
    ul.appendChild(li);
  }

  //color selected
  let colorSel = document.body.querySelector('#color-select');
  colorSel.addEventListener('change', colorChange);

  function colorChange(event) {
    document.body.querySelector('#section-3').style.backgroundColor = colorSel.value;
  }

  // remove listeners
  let remove = document.body.querySelector('#remove-listeners');
  remove.addEventListener('click', event => {
    redIn.removeEventListener('input', changeRed);
    addItem.removeEventListener('click', addLi);
    colorSel.removeEventListener('change', colorChange);

  });

});
