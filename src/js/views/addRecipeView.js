import icons from 'url:../../img/icons.svg';   //Parcel 2
import View from './View';

class addRecipeView extends View{
    _parentElement = document.querySelector(".upload");

    _overlay = document.querySelector(".overlay");
    _window = document.querySelector(".add-recipe-window");
    _btnOpen = document.querySelector(".nav__btn--add-recipe");
    _btnClose = document.querySelector(".btn--close-modal");

    _message = "Your recipe has been added successfully! 😀😀";
    constructor(){
        super();
        this._addHandlerShowWindow();
        this._addHandlerHideWindow();
        // this.addHandlerUpload();
    }

    toggleWindow(){
        this._overlay.classList.toggle("hidden");
        this._window.classList.toggle("hidden");
    }
    _addHandlerShowWindow(){
        this._btnOpen.addEventListener("click", this.toggleWindow.bind(this));
    }
    _addHandlerHideWindow(){
        this._btnClose.addEventListener("click", this.toggleWindow.bind(this));
        this._overlay.addEventListener("click", this.toggleWindow.bind(this));
    }
    addHandlerUpload(handler){
        this._parentElement.addEventListener("submit", e =>{
            e.preventDefault();
                        
            //get form data by a method not individually
            const dataArr = [...new FormData(this._parentElement)];
            const data = Object.fromEntries(dataArr);
            handler(data);
        });
    }
    addHandlerRender(handler) {
        ["hashchange"].forEach(ev =>
          window.addEventListener(ev, handler)
        );
      }
    _generateMarkup (){}
}
export default new addRecipeView();