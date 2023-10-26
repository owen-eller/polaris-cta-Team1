import { LitElement, html, css } from 'lit';

export class PolarisChip extends LitElement {
  static get properties() {
    return {
      name: { type: String },
      link: {type: String},
      active: {type: Boolean, reflect: true},
      filled: {type: Boolean, reflect: true}
    };
  }

  static get styles() {
    return css`
      :host {
        display: inline-flex;
        margin: 0 12px 12px 0;
        justify-content: center;
        padding: 1rem 1rem;
        text-align: center
      }

        .link:focus,
        .link:hover,
        :host([active]) .link{
          background-color: #005fa9;
          border: 2px solid #005fa9;
          border-radius: 2px;
          color: #ffffff;
          cursor: pointer;
        }

        :host([filled]) .link:hover{
          background-color: black;
          border: 2px solid #005fa9;
          border-radius: 2px;
          color: #ffffff;
          cursor: pointer;
        }
        
        .link {
          font-weight:bold;
          text-decoration:none;
          padding: 0.75rem 1rem 0.75rem 1.5rem;
          border: 2px solid #005fa9;
          color: #005fa9;
          font-size: 16px;
        }
    `;
  }

  constructor() {
    super();
    this.name = 'Football';
    this.link= "https://www.psu.edu/news/research/";
  }

  render() {
    return html`<a class="link" href="${this.link}"><slot>${this.name}</slot></a>`;
  }
}
