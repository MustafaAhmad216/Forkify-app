import icons from 'url:../../img/icons.svg';   //Parcel 2

export default class View {
  _data;

  /**
   * Render the received object to the DOM
   * @param {Object | Object[]} data The data to be rendered (e.g. recipe)
   * @param {boolean} [render=true] If false, create markup string instead of rendering to the DOM
   * @returns {undefined | string} A markup string is returned if render=false
   * @this {Object} View instance
   * @author Mustafa Ahmad
   * @todo Finish implementation
   */

  render(data, render = true) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();

    this._data = data;
    const markup = this._generateMarkup();

    if (!render) return markup;

    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }
  /**
   * Updates the view with the given data by iterating over both the new and existing elements and compares their attributes and text content.
   * @param {Object} data The data to be updated.
   * @this {Object} View instance
   * @author Mustafa Ahmad
   */
  update(data) {
    this._data = data;
    const newMarkup = this._generateMarkup();

    /* What to do is : converting markup string to DomObject to be
      compared with actual Dom on the page */

    // 1) methods for converting markup string to real DomObject
    const newDom = document.createRange().createContextualFragment(newMarkup);
    const newElements = Array.from(newDom.querySelectorAll("*"));

    //2) get all old elements to be able to compare them with the new ones
    const curElement = Array.from(this._parentElement.querySelectorAll("*"));

    //3) Comparing then Updating....
    newElements.forEach((newEl, i) => {
      const curEl = curElement[i];
      // console.log(curEl, newEl.isEqualNode(curEl), i);

      //Update changed Texts
      if (
        !newEl.isEqualNode(curEl) &&
        newEl.firstChild?.nodeValue.trim() !== ""
      ) {
        curEl.textContent = newEl.textContent;
      }

      //Update changed Attributes
      if (!newEl.isEqualNode(curEl)) {
        // console.log(newEl.attributes);
        Array.from(newEl.attributes).forEach(attr => {
          curEl.setAttribute(attr.name, attr.value);
        });
      }
    });
  }

  _clear() {
    this._parentElement.innerHTML = "";
  }

  renderSpinner() {
    const markup = `<div class="spinner">
      <svg>
      <use href="${icons}.svg#icon-loader"></use>
      </svg>
      </div> `;
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  renderError(msg = this._errorMessage) {
    const markup = `<div class="error">
          <div>
              <svg>
                  <use href="${icons}.svg#icon-alert-triangle"></use>
              </svg>
          </div>
          <p>${msg}</p>
      </div> `;
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  renderMessage(msg = this._message) {
    const markup = `<div class="message">
          <div>
              <svg>
                  <use href="${icons}.svg#icon-smile"></use>
              </svg>
          </div>
          <p>${msg}</p>
      </div> `;
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }
}