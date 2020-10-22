/////// HOW TO CREATE THAT TYPE OF COMPONENT ? https://www.freecodecamp.org/news/reusable-html-components-how-to-reuse-a-header-and-footer-on-a-website/amp/?__twitter_impression=true&fbclid=IwAR3R7XQ8TSSs9WNjp2nsv0ZIumZBNivXk9HurRPHbewlnju0s6VD_JP-M6A"

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <header>
          <nav class="mainNavBar">
            <ul>
              <li><a href="./index.html">HomePage</a></li>
              <li><a href="./about.html">About</a></li>
            </ul>
          </nav>
        </header>
      `;
  }
}

customElements.define("header-component", Header);
