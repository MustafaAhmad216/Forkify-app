import * as model from './model.js';
import recipeView from './views/recipeView.js';
import resultsView from './views/resultsView.js';
import searchView from './views/searchView.js';
import paginationView from './views/paginationView.js';
import bookmarksView from './views/bookmarksView.js';
import addRecipeView from './views/addRecipeView.js';
import { MODAL_CLOSE_SEC } from './config.js';

// import icons from '../img/icons.svg';   //Parcel 1
// import 'core-js/stable';
import 'regenerator-runtime/runtime.js';

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////////////
// if (module.hot) {
  //   module.hot.accept();
  // }
  
  const controlRecipe = async function () {
    try {
      const id = window.location.hash.slice(1);
      if(!id) return;
      recipeView.renderSpinner();   

      //0) update results view to mark selected search result
      resultsView.update(model.getSearchResultsPage()); 
      
      //1) Updating Bookmarks View
      bookmarksView.update(model.state.bookmarks);
      
      // 2) Loaeding Recipe
      await model.loadRecipe(id);
      
      // 3) Rendering Recipe
      recipeView.render(model.state.recipe);
      // recipeView.update(model.state.recipe);

    } catch (err) {
      console.error(err.message);
      recipeView.renderError();
    }
  };
  
  const controlSearchResults = async function () {
    try {
      resultsView.renderSpinner();
      console.log(resultsView);
      
      //1) Get search query
      const query = searchView.getQuery();
      // if(!query) return;   // disable to execute renderError in render function
      
      //2) Load search results
      await model.loadSearchResults(query);
      
      //3) Render results
      resultsView.render(model.state.search.results);
      resultsView.render(model.getSearchResultsPage());
      
      //4) Render initial pagination buttons
      paginationView.render(model.state.search);
      
      
      console.log(model.state.search.results);
      
    } catch (err) {
      console.error(err.message);
      recipeView.renderError();
    }
  };
  
  const controlPagination = function (goToPage) {
    //3) Render new results
    resultsView.render(model.getSearchResultsPage(goToPage));
    
    //4) Render new pagination buttons
    paginationView.render(model.state.search);
  }
  
  const controlServings = function (newServings) {
    //1) Update the recipe servings (in state)
    model.updateServings(newServings);
    
    //2) Update the recipe View 
    // recipeView.render(model.state.recipe);
    recipeView.update(model.state.recipe);
  }
  
  const controlAddBookmark = function () {
    //Add / Delete Bookmark
    if(!model.state.recipe.bookmarked)
      model.addBookmark(model.state.recipe);
    else
      model.deleteBookmark(model.state.recipe.id);

    //Update recipeView
    console.log(model.state.recipe);
    recipeView.update(model.state.recipe);

    //Update BookmarksView
    bookmarksView.render(model.state.bookmarks);
    
  }
  
  const controlBookmarks = function () {
    bookmarksView.render(model.state.bookmarks);
  }
  
  const controlAddRecipe = async function (newRecipe) {
    try {
      //render Spinner
      addRecipeView.renderSpinner();

      //Upload new Recipe data
      await model.uploadRecipe(newRecipe);
      console.log(model.state.recipe);
      
      //Render new Recipe
      recipeView.render(model.state.recipe);
      
      //show Success Message
      addRecipeView.renderMessage();

      //Update BookmarksView
      bookmarksView.render(model.state.bookmarks);

      //Change ID in URL
      window.history.pushState(null,'',`#${model.state.recipe.id}`);

      //Close Form Window
      setTimeout(() => {
        addRecipeView.toggleWindow();
      }, MODAL_CLOSE_SEC);

    } catch (err) {
      addRecipeView.renderError(err.message)
    }

  }
  
  const init = function(){
    bookmarksView.addHandlerRender(controlBookmarks);
    recipeView.addHandlerUpdateServings(controlServings);
    recipeView.addHandlerRender(controlRecipe);
    recipeView.addHandlerAddBookmark(controlAddBookmark);
    searchView.addHandlerSearch(controlSearchResults);
    paginationView.addHandlerClick(controlPagination);
    addRecipeView.addHandlerUpload(controlAddRecipe);
    // addRecipeView.addHandlerRender(controlAddRecipe);
  }
  init();