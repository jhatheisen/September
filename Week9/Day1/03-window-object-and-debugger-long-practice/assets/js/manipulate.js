export function changeTitle() {
    // Change the title of the page to "(Your name)'s Portfolio"

    window.document.title = "Jhass' Portfolio";
}

export function changeHeader() {
    // Change the name in the h1 of the page to your name

    document.body.children[0].children[0].innerText = 'I am Jhass Theisen'
}

export function changeAboutMe() {
    /* Update the first paragraph in the About Me section with a small
     passage about yourself */

    document.body.children[1].children[1].innerText = 'I am a student of app academy studying to become a full stack software engineer. I am learning HTML, CSS, JS, and many other skills needed for software development.'
}
