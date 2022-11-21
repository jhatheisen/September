import { getIndex } from "./utilities.js";
import mrDrPotatoHeadQuotes  from './quotes/mrPotatoHead.js';
import * as quotes from './quotes/mrsPotatoHead.js';


export class Game {

  start() {

    document.getElementById('hello').addEventListener('click', () => {
      const index = getIndex();
      const messageContainer = document.getElementById('message');
      if (index === 1) {
        messageContainer.innerText = mrDrPotatoHeadQuotes['hello'];
      } else {
        messageContainer.innerText = quotes.mrsPotatoHeadQuotes['hello'];
      }
    });

    document.getElementById('bye').addEventListener('click', () => {
      const index = getIndex();
      const messageContainer = document.getElementById('message');
      if (index === 1) {
        messageContainer.innerText = mrDrPotatoHeadQuotes['bye'];
      } else {
        messageContainer.innerText = quotes.mrsPotatoHeadQuotes['bye'];
      }
    });

    document.getElementById('swap').addEventListener('click', () => {
      const index = getIndex();
      const image = document.getElementById('image');
      const messageContainer = document.getElementById('message');
      const wrapper = document.getElementById('wrapper');
      if (index === 1) {
        image.src = "./assets/images/potatohead2.png";
        wrapper.dataset.index = "2";
      } else {
        image.src = "./assets/images/potatohead1.png";
        wrapper.dataset.index = "1";
      }
      messageContainer.innerText = "";
    })
  }
}
