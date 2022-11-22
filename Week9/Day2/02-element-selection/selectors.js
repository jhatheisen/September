const select = () => {
    /* Write queries for each of the following */

    /* Section 1 */
    // 1. Get all seeded fruit elements
    // Your code here
    let seedList = document.querySelectorAll("li.seed");
    seedList.forEach(list => {
      console.log(list);
    });
    // 2. Get all seedless fruit elements
    // Your code here
    document.querySelectorAll("li.seedless").forEach(list => console.log(list));

    // 3. Get first seedless fruit element
    // Your code here
    console.log(document.querySelector("li.seedless"));

    /* Section 2 */
    // 4. Get inner span with text "you"
    // Your code here
    console.log(document.querySelector("span"));

    // 5. Get all children of element "wrapper"
    // Your code here
    document.querySelectorAll("#wrapper > *").forEach(list => console.log(list));

    // 6. Get all odd number list items in the list
    // Your code here
    document.querySelectorAll("li.odd").forEach(list => console.log(list));

    // 7. Get all even number list items in the list
    // Your code here
    document.querySelectorAll("ol li:not(.odd)").forEach(list => console.log(list));


    /* Section 3 */
    // 8. Get all tech companies without a class name
    // Your code here
    document.querySelectorAll("a:not([class])").forEach(list => console.log(list));


    // 9. Get "Amazon" list element
    // Your code here
    console.log(document.querySelector('a[href="https://www.amazon.com"]'));


    // 10. Get all unicorn list elements (not the image element)
    // Your code here
    document.querySelectorAll("li:has(> img.unicorn)").forEach(list => console.log(list));

}

window.onload = select;
