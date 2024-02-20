import icons from 'url:../../img/icons.svg';   //Parcel 2
import View from './View';
import previewView from './previewView.js';

class ResultsView extends View{
    _parentElement = document.querySelector(".results");
    _errorMessage = "Recipe couldn't be found.<br>Please try another recipe";
    _message = "Success!";

    _generateMarkup() {
        return this._data.map(result => previewView.render(result, false)).join("");
    }
}
  
export default new ResultsView();
  