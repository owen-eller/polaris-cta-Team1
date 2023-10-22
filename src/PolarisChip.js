import { LitElement, html, css } from 'lit';

export class PolarisChip extends LitElement {
  static get properties() {
    return {
      name: { type: String },
      link: {type: String},
      active: {type: Boolean, reflect: true}
    };
  }

  static get styles() {
    return css`
      :host {
        display: inline-block;
        margin: 0 12px 12px 0;
      }

        .link:focus,
        .link:hover,
        :host([active]) .link{
          background-color: #7ac6ff;
          border: 2px solid #8acdff;
          border-radius: 2px;
          color: #ffffff;
          cursor: pointer;
        }
        
        .link {
          font-weight:bold;
          text-decoration:none;
          padding: 0.75rem 1rem 0.75rem 1.5rem;
          border: 2px solid ##005fa9;
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
