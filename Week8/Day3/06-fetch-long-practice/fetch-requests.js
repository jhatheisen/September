/*
Make fetch requests in the browser for each of the following phases.
Paste your code for fetch requests here once you finish each phase.
*/

/* ============================== Phase 1 ============================== */

// fetch post to products
fetch('/products', {
  method: 'POST',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded'},
  body: "name=Caribbean+Delight+Coffee&description=Made+by+Manatee+Coffee&price=11%2E99&categories=grocery"
});


/* ============================== Phase 2 ============================== */

// fetch post and print status and others
fetch('/products', {
  method: 'POST',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded'},
  body: "name=Caribbean+Delight+Coffee&description=Made+by+Manatee+Coffee&price=11%2E99&categories=grocery"
}).then(res => {
  console.log('status code', res.status);
  console.log('Content-Type header val: ', res.headers.get('Content-Type'));
  console.log('url of res', res.url);
  console.log('redirect?', res.redirected);
});



/* ============================== Phase 3 ============================== */

// Your code here
let body = new URLSearchParams({
  name: "Caribbean Delight Coffee",
  description: "Made by Manatee Coffee",
  price: 11.99,
  categories: "grocery"
});

fetch('/products', {
  method: 'POST',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded'},
  body: body
});


// 4

body = new URLSearchParams({
  name: "Razer Black Widow",
  description: "RGB Gaming Keyboard",
  price: 100.00,
  categories: "electronics"
});

fetch('/products', {
  method: 'POST',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded'},
  body: body
});

// 4.1 make best selling
