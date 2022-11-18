fetch('/artists/1/albums')
  .then(res => {
    console.log(res.status);
    console.log(res.headers.get('Content-Type'));
    res.json().then(data => console.log(JSON.stringify(data)));
  })


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
