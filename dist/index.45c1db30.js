function e(e){return e&&e.__esModule?e.default:e}var t,r,n,a=globalThis,i={},s={},o=a.parcelRequire3a11;null==o&&((o=function(e){if(e in i)return i[e].exports;if(e in s){var t=s[e];delete s[e];var r={id:e,exports:{}};return i[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){s[e]=t},a.parcelRequire3a11=o),(0,o.register)("27Lyk",function(e,t){Object.defineProperty(e.exports,"register",{get:()=>r,set:e=>r=e,enumerable:!0,configurable:!0});var r,n=new Map;r=function(e,t){for(var r=0;r<t.length-1;r+=2)n.set(t[r],{baseUrl:e,path:t[r+1]})}}),o("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["f9fpV","index.45c1db30.js","eyyUD","icons.0c93d58c.svg"]'));const c="https://forkify-api.herokuapp.com/api/v2/recipes",d="b276825e-55bb-4dd6-b2ed-c0bef5a2369e",l=async function(e,t){try{let r=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),n=await Promise.race([r,new Promise(function(e,t){setTimeout(function(){t(Error("Request took too long! Timeout after 5 second"))},5e3)})]),a=await n.json();if(!n.ok)throw Error(`${a.message} (${n.status})`);return a}catch(e){throw e}};var u={};u=new URL("icons.0c93d58c.svg",import.meta.url).toString();class p{_data;render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let r=this._generateMarkup();if(!t)return r;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}update(e){this._data=e;let t=this._generateMarkup(),r=Array.from(document.createRange().createContextualFragment(t).querySelectorAll("*")),n=Array.from(this._parentElement.querySelectorAll("*"));r.forEach((e,t)=>{let r=n[t];e.isEqualNode(r)||e.firstChild?.nodeValue.trim()===""||(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach(e=>{r.setAttribute(e.name,e.value)})})}_clear(){this._parentElement.innerHTML=""}renderSpinner(){let t=`<div class="spinner">
      <svg>
      <use href="${e(u)}.svg#icon-loader"></use>
      </svg>
      </div> `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderError(t=this._errorMessage){let r=`<div class="error">
          <div>
              <svg>
                  <use href="${e(u)}.svg#icon-alert-triangle"></use>
              </svg>
          </div>
          <p>${t}</p>
      </div> `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}renderMessage(t=this._message){let r=`<div class="message">
          <div>
              <svg>
                  <use href="${e(u)}.svg#icon-smile"></use>
              </svg>
          </div>
          <p>${t}</p>
      </div> `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}}(Fraction=function(e,t){if(void 0!==e&&t)"number"==typeof e&&"number"==typeof t?(this.numerator=e,this.denominator=t):"string"==typeof e&&"string"==typeof t&&(this.numerator=parseInt(e),this.denominator=parseInt(t));else if(void 0===t){if("number"==typeof(num=e))this.numerator=num,this.denominator=1;else if("string"==typeof num){var r,n,a=num.split(" ");if(a[0]&&(r=a[0]),a[1]&&(n=a[1]),r%1==0&&n&&n.match("/"))return new Fraction(r).add(new Fraction(n));if(!r||n)return;if("string"==typeof r&&r.match("/")){var i=r.split("/");this.numerator=i[0],this.denominator=i[1]}else{if("string"==typeof r&&r.match("."))return new Fraction(parseFloat(r));this.numerator=parseInt(r),this.denominator=1}}}this.normalize()}).prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var e=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),t=this.numerator%this.denominator,r=this.denominator,n=[];return 0!=e&&n.push(e),0!=t&&n.push((0===e?t:Math.abs(t))+"/"+r),n.length>0?n.join(" "):0},Fraction.prototype.rescale=function(e){return this.numerator*=e,this.denominator*=e,this},Fraction.prototype.add=function(e){var t=this.clone();return e instanceof Fraction?e=e.clone():e=new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator+=e.numerator,t.normalize()},Fraction.prototype.subtract=function(e){var t=this.clone();return e instanceof Fraction?e=e.clone():e=new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator-=e.numerator,t.normalize()},Fraction.prototype.multiply=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.numerator,t.denominator*=e.denominator;else{if("number"!=typeof e)return t.multiply(new Fraction(e));t.numerator*=e}return t.normalize()},Fraction.prototype.divide=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.denominator,t.denominator*=e.numerator;else{if("number"!=typeof e)return t.divide(new Fraction(e));t.denominator*=e}return t.normalize()},Fraction.prototype.equals=function(e){e instanceof Fraction||(e=new Fraction(e));var t=this.clone().normalize(),e=e.clone().normalize();return t.numerator===e.numerator&&t.denominator===e.denominator},Fraction.prototype.normalize=(t=function(e){return"number"==typeof e&&(e>0&&e%1>0&&e%1<1||e<0&&e%-1<0&&e%-1>-1)},r=function(e,t){if(!t)return Math.round(e);var r=Math.pow(10,t);return Math.round(e*r)/r},function(){if(t(this.denominator)){var e=r(this.denominator,9),n=Math.pow(10,e.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*n),this.numerator*=n}if(t(this.numerator)){var e=r(this.numerator,9),n=Math.pow(10,e.toString().split(".")[1].length);this.numerator=Math.round(this.numerator*n),this.denominator*=n}var a=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=a,this.denominator/=a,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),Fraction.gcf=function(e,t){var r=[],n=Fraction.primeFactors(e),a=Fraction.primeFactors(t);return(n.forEach(function(e){var t=a.indexOf(e);t>=0&&(r.push(e),a.splice(t,1))}),0===r.length)?1:function(){var e,t=r[0];for(e=1;e<r.length;e++)t*=r[e];return t}()},Fraction.primeFactors=function(e){for(var t=Math.abs(e),r=[],n=2;n*n<=t;)t%n==0?(r.push(n),t/=n):n++;return 1!=t&&r.push(t),r},n=Fraction;class h extends p{_parentElement=document.querySelector(".recipe");_errorMessage="Recipe couldn't be found.<br>Please try another recipe";_message="Success!";addHandlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--update-servings");if(!r)return;let n=+r.dataset.updateTo;n>0&&e(n)})}addHandlerAddBookmark(e){this._parentElement.addEventListener("click",function(t){t.target.closest(".btn--bookmark")&&e()})}_generateMarkup(){return`
        <figure class="recipe__fig">
        <img src="${this._data.image}" alt="Tomato" class="recipe__img" />
        <h1 class="recipe__title">
            <span>${this._data.title}</span>
        </h1>
        </figure>

        <div class="recipe__details">
        <div class="recipe__info">
            <svg class="recipe__info-icon">
            <use href="${e(u)}.svg#icon-clock"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
            <span class="recipe__info-text">minutes</span>
        </div>
        <div class="recipe__info">
            <svg class="recipe__info-icon">
            <use href="${e(u)}.svg#icon-users"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
            <span class="recipe__info-text">servings</span>

            <div class="recipe__info-buttons">
            <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings-1}">
                <svg>
                <use href="${e(u)}.svg#icon-minus-circle"></use>
                </svg>
            </button>
            <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings+1}">
                <svg>
                <use href="${e(u)}.svg#icon-plus-circle"></use>
                </svg>
            </button>
            </div> 
        </div>

        <div class="recipe__info-data btn--tiny">
            <svg>
            <use href="${e(u)}.svg#icon-user"></use>
            </svg>
        </div>
        <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
            <svg>
            <use href="${e(u)}.svg#icon-user"></use>
            </svg>
        </div> 

        <button class="btn--round btn--bookmark">
            <svg class="">
            <use href="${e(u)}.svg#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
            </svg>
        </button>
        </div>

        <div class="recipe__ingredients">
        <h2 class="heading--2">Recipe ingredients</h2>
        <ul class="recipe__ingredient-list">
            ${this._data.ingredients.map(t=>`<li class="recipe__ingredient">
                        <svg class="recipe__icon">
                        <use href="${e(u)}.svg#icon-check"></use>
                        </svg>
                        <div class="recipe__quantity">${t.quantity?new n(t.quantity).toString():""}</div>
                        <div class="recipe__description">
                        <span class="recipe__unit">${t.unit??""}</span>
                        ${t.description??""}
                        </div>
                    </li>`).join(" ")}
        </ul>
        </div>

        <div class="recipe__directions">
        <h2 class="heading--2">How to cook it</h2>
        <p class="recipe__directions-text">
            This recipe was carefully designed and tested by
            <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
            directions at their website.
        </p>
        <a
            class="btn--small recipe__btn"
            href="${this._data.source}"
            target="_blank"
        >
            <span>Directions</span>
            <svg class="search__icon">
            <use href="${e(u)}.svg#icon-arrow-right"></use>
            </svg>
        </a>
        </div>`}}var g=new h;const m={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10},bookmarks:[]};console.log(m);const _=function(e){let{recipe:t}=e.data;return{id:t.id,title:t.title,servings:t.servings,ingredients:t.ingredients,cookingTime:t.cooking_time,publisher:t.publisher,image:t.image_url,source_URL:t.source_url,...t.key&&{key:t.key}}},f=async function(e){try{let t=await l(`${c}/${e}?key=${d}`);m.recipe=_(t),m.bookmarks.some(t=>t.id===e)?m.recipe.bookmarked=!0:m.recipe.bookmarked=!1,console.log(m.recipe)}catch(e){throw console.error(`${e}\u{1F4A5}\u{1F4A5}\u{1F4A5}`),e}},v=async function(e){try{m.search.query=e;let t=await l(`${c}?search=${e}&key=${d}`);m.search.results=t.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url,...e.key&&{key:e.key}})),m.search.page=1,console.log(m.search.results)}catch(e){throw console.error(`${e}\u{1F4A5}\u{1F4A5}\u{1F4A5}`),e}},b=function(e=m.search.page){m.search.page=e;let t=(e-1)*m.search.resultsPerPage,r=e*m.search.resultsPerPage;return m.search.results.slice(t,r)},k=function(e){m.recipe.ingredients.forEach(t=>{t.quantity=t.quantity*e/m.recipe.servings}),m.recipe.servings=e,console.log(m.recipe.servings)},y=function(){localStorage.setItem("bookmarks",JSON.stringify(m.bookmarks))},w=function(e){if(m.bookmarks.some(e=>e.id===m.recipe.id)){console.log("Already added bookmark");return}m.bookmarks.push(e),e.id===m.recipe.id&&(m.recipe.bookmarked=!0),console.log(m.bookmarks),y()},$=function(e){let t=m.bookmarks.findIndex(t=>t.id===e);console.log(t),m.bookmarks.splice(t,1),e===m.recipe.id&&(m.recipe.bookmarked=!1),console.log(m.bookmarks),y()};!function(){let e=localStorage.getItem("bookmarks");e&&(m.bookmarks=JSON.parse(e))}();const E=async function(e){try{let t=Object.entries(e).filter(e=>e[0].startsWith("ingredient-")&&""!==e[1]).map(e=>{let t=e[1].split(",").map(e=>e.trim());if(3!==t.length)throw Error("Invalid Ingredient Format, Please use the correct format!");let[r,n,a]=t;return{quantity:r?+r:null,unit:n,description:a}}),r={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t};console.log(r);let n=await l(`${c}?key=${d}`,r);m.recipe=_(n),w(m.recipe)}catch(e){throw console.error(`${e.message}\u{1F4A5}\u{1F4A5}\u{1F4A5}`),e}};var F=new class extends p{_parentElement="";_generateMarkup(){let t=window.location.hash.slice(1);return`
        <li class="preview">
          <a class="preview__link ${this._data.id===t?"preview__link--active":""}" href="#${this._data.id}">
              <figure class="preview__fig">
                  <img src='${this._data.image}' alt="${this._data.title}" />
              </figure>
              <div class="preview__data">
              <h4 class="preview__title">${this._data.title} ...</h4>
              <p class="preview__publisher">${this._data.publisher} </p>
              <div class="preview__user-generated ${this._data.key?"":"hidden"}">
              <svg>
              <use href="${e(u)}.svg#icon-user"></use>
              </svg>
          </div> 
              </div>
          </a>
          </li>`}};class S extends p{_parentElement=document.querySelector(".results");_errorMessage="Recipe couldn't be found.<br>Please try another recipe";_message="Success!";_generateMarkup(){return this._data.map(e=>F.render(e,!1)).join("")}}var M=new S;class H extends p{_parentElement=document.querySelector(".search");_data;_errorMessage="Recipe couldn't be found.<br>Please try another recipe";_message="Success!";getQuery(){let e=this._parentElement.querySelector(".search__field").value;return this._clearInput(),e}addHandlerSearch(e){this._parentElement.addEventListener("submit",t=>{t.preventDefault(),e()})}_clearInput(){this._parentElement.querySelector(".search__field").value=""}}var q=new H;class A extends p{_parentElement=document.querySelector(".pagination");_errorMessage="Recipe couldn't be found.<br>Please try another recipe";_message="Success!";addHandlerClick(e){this._parentElement.addEventListener("click",t=>{let r=t.target.closest(".btn--inline");r&&e(+r.dataset.goto)})}_generateMarkup(){let t=this._data.page,r=Math.ceil(this._data.results.length/this._data.resultsPerPage);return 1===t&&r>1?`
                <button data-goto="${t+1}" class="btn--inline pagination__btn--next">
                <span>Page ${t+1}</span>
                <svg class="search__icon">
                    <use href="${e(u)}.svg#icon-arrow-right"></use>
                </svg>
                </button>
                </button>
                <button class="btn--center">
                <span>${t}</span>
                </button>
            `:t===r&&r>1?`
                </button>
                <button class="btn--center">
                <span>${t}</span>
                </button>
                <button data-goto="${t-1}" class="btn--inline pagination__btn--prev">
                <svg class="search__icon">
                    <use href="${e(u)}.svg#icon-arrow-left"></use>
                </svg>
                <span>Page ${t-1}</span>
                </button>
            `:t<r?`
            <button data-goto="${t-1}" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
            <use href="${e(u)}.svg#icon-arrow-left"></use>
            </svg>
            <span>Page ${t-1}</span>
            </button>
            <button class="btn--center">
            <span>${t}</span>
            </button>
                <button data-goto="${t+1}" class="btn--inline pagination__btn--next">
                <span>Page ${t+1}</span>
                <svg class="search__icon">
                <use href="${e(u)}.svg#icon-arrow-right"></use>
                </svg>
                </button> `:`
            </button>
            <button class="btn--center">
            <span>${t}</span>
            </button>
            `}}var x=new A;class L extends p{_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks. Find a nice recipe again and bookmark it \uD83D\uDE00";_message="Success!";addHandlerRender(e){window.addEventListener("load",e)}_generateMarkup(){return this._data.map(e=>F.render(e,!1)).join("")}}var P=new L;class R extends p{_parentElement=document.querySelector(".upload");_overlay=document.querySelector(".overlay");_window=document.querySelector(".add-recipe-window");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");_message="Your recipe has been added successfully! \uD83D\uDE00\uD83D\uDE00";constructor(){super(),this._addHandlerShowWindow(),this._addHandlerHideWindow()}toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_addHandlerShowWindow(){this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerHideWindow(){this._btnClose.addEventListener("click",this.toggleWindow.bind(this)),this._overlay.addEventListener("click",this.toggleWindow.bind(this))}addHandlerUpload(e){this._parentElement.addEventListener("submit",t=>{t.preventDefault(),e(Object.fromEntries([...new FormData(this._parentElement)]))})}addHandlerRender(e){["hashchange"].forEach(t=>window.addEventListener(t,e))}_generateMarkup(){}}var T=new R;const D=async function(){try{let e=window.location.hash.slice(1);if(!e)return;g.renderSpinner(),M.update(b()),P.update(m.bookmarks),await f(e),g.render(m.recipe)}catch(e){console.error(e.message),g.renderError()}},j=async function(){try{M.renderSpinner(),console.log(M);let e=q.getQuery();await v(e),M.render(m.search.results),M.render(b()),x.render(m.search),console.log(m.search.results)}catch(e){console.error(e.message),g.renderError()}},O=async function(e){try{T.renderSpinner(),await E(e),console.log(m.recipe),g.render(m.recipe),T.renderMessage(),P.render(m.bookmarks),window.history.pushState(null,"",`#${m.recipe.id}`),setTimeout(()=>{T.toggleWindow()},2500)}catch(e){T.renderError(e.message)}};P.addHandlerRender(function(){P.render(m.bookmarks)}),g.addHandlerUpdateServings(function(e){k(e),g.update(m.recipe)}),g.addHandlerRender(D),g.addHandlerAddBookmark(function(){m.recipe.bookmarked?$(m.recipe.id):w(m.recipe),console.log(m.recipe),g.update(m.recipe),P.render(m.bookmarks)}),q.addHandlerSearch(j),x.addHandlerClick(function(e){M.render(b(e)),x.render(m.search)}),T.addHandlerUpload(O);
//# sourceMappingURL=index.45c1db30.js.map
