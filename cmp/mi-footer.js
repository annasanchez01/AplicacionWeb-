class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2021
        Ana Paula Sanchez Villanueva.
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
