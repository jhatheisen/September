/****************************** ADD DOG BUTTON ******************************/
const add = document.getElementById("add");
add.addEventListener("click", async () => {
    try {
        const res = await fetch("https://dog.ceo/api/breeds/image/random")
        const data = await res.json();

        const url = data.message; // URL of new dog image

        /*--------------- Get breed (Hint: Parse from URL) ---------------- */
        // Your code here
        console.log(url);
        let breed = url.split('/')[4];
        console.log(breed);


        /*------------ Create new dog card with the url above ------------- */
        /* (use the HTML structure for the current dog image in the index.html
            file to create a new image with the url) */
        // Your code here
        const newCard = document.createElement('li');
        newCard.innerHTML = `<figure>
                                <img src="${url}" />
                                <figcaption>${breed}</figcaption>
                             </figure>`;

        // const figure = document.createElement('figure');

        // const img = document.createElement('img');
        // img.setAttribute('src', url);

        // const figcap = document.createElement('figcaption');
        // figcap.innerText = breed;

        // figure.appendChild(img);
        // figure.appendChild(figcap);

        // newCard.appendChild(figure);

        /* Add the new dog card as a child to the ul in the .gallery element */
        // Your code here

        document.querySelector('ul').appendChild(newCard);

    } catch (e) {
        console.log("Couldn't fetch dog :(")
    }
});

/************************** REMOVE FIRST DOG BUTTON **************************/
const removeFirst = document.getElementById("remove-first");
removeFirst.addEventListener("click", () => {
    /*-------------------- Select the first dog card --------------------- */
    // Your code here
    let first = document.querySelector('ul li');

    /*-------------------- Remove the first dog card --------------------- */
    // Your code here
    first.remove();
});

/************************** REMOVE LAST DOG BUTTON ***************************/
const removeLast = document.getElementById("remove-last");
removeLast.addEventListener("click", () => {
    /*-------------------- Select the last dog card ----------------------- */
    // Your code here
    let allLis = document.querySelectorAll('ul li');
    let last = allLis[allLis.length - 1];

    /*-------------------- Remove the last dog card ----------------------- */
    // Your code here
    last.remove();
});
