/////// HOW TO CREATE THAT TYPE OF COMPONENT ? https://www.freecodecamp.org/news/reusable-html-components-how-to-reuse-a-header-and-footer-on-a-website/amp/?__twitter_impression=true&fbclid=IwAR3R7XQ8TSSs9WNjp2nsv0ZIumZBNivXk9HurRPHbewlnju0s6VD_JP-M6A"

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <style>
          nav {
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color:  #0a0a23;
          }
          
          ul li {
            list-style: none;
            display: inline;
          }
          
          a {
            font-weight: 700;
            margin: 0 25px;
            color: #fff;
            text-decoration: none;
          }
          
          a:hover {
            padding-bottom: 5px;
            box-shadow: inset 0 -2px 0 0 #fff;
          }
        </style>
        <header>
          <nav>
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
