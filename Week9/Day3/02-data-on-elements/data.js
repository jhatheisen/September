// Your code here
window.addEventListener('DOMContentLoaded', event => {

  const addButton = document.body.querySelector('#add');
  addButton.addEventListener('click', event => {
    // stop default submit
    event.preventDefault();
    // create list el
    const li = document.createElement('li');
    // 
    const val = document.body.querySelector('#name').value;
    li.innerHTML = val;

    const type = document.body.querySelector('#type').value;
    let color = '';
    li.setAttribute('data-type', type);
    switch(type) {
        case 'drinks':
          color = 'red';
          break;
        case 'bakery':
          color = 'green'
          break;
        case 'canned':
          color = 'brown';
          break;
        case 'dairy':
          color = 'blue';
          break;
        case 'frozen':
          color = 'black';
          break;
        case 'meats':
          color = 'orange';
          break;
        case 'produce':
          color = 'yellow'
          break;
        case 'toiletries':
          color = 'pink'
          break;
        case 'other':
          color = 'purple';
          break;
      }
      li.style.backgroundColor = color;


    document.body.querySelector('#shopping-list').append(li);
  });
});
