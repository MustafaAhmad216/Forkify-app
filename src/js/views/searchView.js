import View from './View.js';
import icons from 'url:../../img/icons.svg';   //Parcel 2
import { Fraction } from 'fractional';
class SearchView extends View{
  _parentElement = document.querySelector(".search");
  _data;
  _errorMessage = "Recipe couldn't be found.<br>Please try another recipe";
  _message = "Success!";

  getQuery(){
    const query = this._parentElement.querySelector(".search__field").value;
    this._clearInput();
    return query;
  }
  addHandlerSearch(handler) {
    this._parentElement.addEventListener("submit", e => {
          e.preventDefault();
          handler();
        })
      // this._parentElement.querySelector(".search__field").addEventListener("keyup", handler)
      // this._parentElement.querySelector(".search__btn").addEventListener("click", handler);
    }
    _clearInput() {
      this._parentElement.querySelector(".search__field").value = "";
    }
}

export default new SearchView();
