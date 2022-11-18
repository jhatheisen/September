// GET /dogs
fetch('/dogs')
  .then(res => res.json())
  .then(resBody => console.log(resBody));

fetch('/artists/1/albums')
  .then(res => {
    console.log(res.status);
    console.log(res.headers.get('Content-Type'));
    res.json().then(console.log);
  })

// GET /dogs/:dogId
fetch('/dogs/2')
  .then(res => res.json())
  .then(resBody => console.log(resBody));

// POST /dogs
fetch('/dogs', {
  method: 'POST',
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    name: "newdog",
    age: "10"
  })
}).then(res => res.json())
.then(resBody => console.log(resBody));


// PUT/PATCH dog
fetch("/dogs/1", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    name: "newdog",
    age: "10"
  })
}).then(res => res.json())
.then(resBody => console.log(resBody));

// DELETE /dogs/:dogId
fetch('/dogs/1', {
  method: 'DELETE'
}).then(res => res.json())
.then(resBody => console.log(resBody));
