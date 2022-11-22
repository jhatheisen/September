import { changeTitle, changeHeader, changeAboutMe } from './manipulate.js';
import * as Find from './search.js';

changeTitle();
changeHeader();
changeAboutMe();
console.log(Find.findElementById("header"));
// <div id="header">
console.log(Find.findFirstElementOfTag("LI"));
// <li><h3>Computer Science</h3>...</li>
console.log(Find.findFirstElementOfClass("section"));
// <div class="section"><h2>About Me</h2>...</div>
console.log(Find.findElementsOfTag("H3"));
// [h3, h3, h3, h3, h3, h3, h3, h3, h3, h3, h3] (length: 11)
console.log(Find.findElementsOfClass("section"));
// [div.section, div.section, div.section, div.section, div.section, div.section] (length: 6)
