/*
Make fetch requests in the browser for each of the following tasks.
Paste your code for fetch requests here once you finish each task.
*/

/* =============== 1. Print the status code of the response =============== */

// Your code here

fetch('/products')
  .then((res) => {
    console.log('response status', res.status);
  });

fetch('/products')
  .then(res => res.status)
  .then(console.log);



/* ====== 2. Print true if the status of the response was successful ====== */

// Your code here
fetch('/products')
  .then((res) => {
    console.log('response ok', res.ok);
  });


/* =================== 3. Print the Content-Type Header =================== */

// Your code here
fetch('/products')
.then((res) => {
    console.log('response content type ', res.headers.get('Content-Type'));
  });

/* ============== 4. Print the body of the response as text =============== */

// Your code here
fetch('/products')
.then(res => res.text())
.then(console.log);

async function getBody(url) {
  const res = await fetch(url);
  const text = await res.text();
  console.log(text);
}

getBody('/products');
