// import { async } from "regenerator-runtime";
import { API_KEY, API_URL, RES_PER_PAGE } from "./config";
import { AJAX } from "./helpers";
import recipeView from './views/recipeView.js';

export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
    page: 1,
    resultsPerPage: RES_PER_PAGE,
  },
  bookmarks: [],
};
console.log(state);

const createRecipeObject = function(data){
  const { recipe } = data.data;
  return {
    id: recipe.id,
    title: recipe.title,
    servings: recipe.servings,
    ingredients: recipe.ingredients,
    cookingTime: recipe.cooking_time,
    publisher: recipe.publisher,
    image: recipe.image_url,
    source_URL: recipe.source_url,
    ...(recipe.key && {key: recipe.key}),
  };
}

export const loadRecipe = async function (id) {
  try {
    
    const data = await AJAX(`${API_URL}/${id}?key=${API_KEY}`);
    state.recipe = createRecipeObject(data);
    
    if(state.bookmarks.some(bookmark => bookmark.id === id ))
    state.recipe.bookmarked = true;
    else state.recipe.bookmarked = false;
  
  console.log(state.recipe);
  } catch (err) {
    console.error(`${err}💥💥💥`);
    throw err;
  }
};

export const loadSearchResults = async function (query){
    try {
        state.search.query = query;
        const data = await AJAX(`${API_URL}?search=${query}&key=${API_KEY}`);
        state.search.results = data.data.recipes.map(rec => {
            return{
                id: rec.id,
                title: rec.title,
                publisher: rec.publisher,
                image: rec.image_url,   
                ...(rec.key && {key: rec.key}),
            }
        });
        state.search.page = 1;
        console.log(state.search.results);
    } catch (err) {
        console.error(`${err}💥💥💥`);
        throw err;       
    }
}

export const getSearchResultsPage = function (page = state.search.page) {
    state.search.page = page;

    const start = (page - 1) * state.search.resultsPerPage;
    const end = (page * state.search.resultsPerPage);
    return state.search.results.slice(start, end);
}

export const updateServings = function (newServings) {
  state.recipe.ingredients.forEach(ing => {
    //newQT = (oldQT * newServings) / oldServings
    ing.quantity = (ing.quantity * newServings) / state.recipe.servings;
  });
  state.recipe.servings = newServings;
  
  console.log(state.recipe.servings);
}

const persistBookmarks = function(){
  localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));
}

export const addBookmark = function (recipe){
  //Add Bookmark
    if(state.bookmarks.some((bookmark) => bookmark.id === state.recipe.id)) {
      console.log("Already added bookmark");
      return;
    }
  state.bookmarks.push(recipe);

  // Mark current recipe as bookmarked
  if(recipe.id === state.recipe.id)
    state.recipe.bookmarked = true;
  console.log(state.bookmarks);

  persistBookmarks();
}

export const deleteBookmark = function (id){

  //Delete Bookmark
  const index = state.bookmarks.findIndex((el) => el.id === id);
  console.log(index);
  state.bookmarks.splice(index, 1);
  
  // Mark current recipe as bookmarked
  if(id === state.recipe.id)
    state.recipe.bookmarked = false;

  console.log(state.bookmarks);

  persistBookmarks();
}

const init = function(){
  const storage = localStorage.getItem('bookmarks');
  if (storage)  state.bookmarks = JSON.parse(storage);
}
init();

const clearBookmarks = function(){
  localStorage.clear('bookmarks');
};
// clearBookmarks();

export const uploadRecipe = async function (newRecipe) {
  try {
    const ingredients = Object.entries(newRecipe)
      .filter(el => el[0].startsWith("ingredient-") && el[1] !== "")
      .map(ing => {
        const ingArr = ing[1].split(",").map(el => el.trim());
        if (ingArr.length !== 3)
          throw new Error(
            "Invalid Ingredient Format, Please use the correct format!"
          );
        const [quantity, unit, description] = ingArr;
        return { quantity: quantity ? +quantity : null, unit, description };
      });

    const recipe = {
      title: newRecipe.title,
      source_url: newRecipe.sourceUrl,
      image_url: newRecipe.image,
      publisher: newRecipe.publisher,
      cooking_time: +(newRecipe.cookingTime),
      servings: +(newRecipe.servings),
      ingredients,
    };
    console.log(recipe);

    const data = await AJAX(`${API_URL}?key=${API_KEY}`, recipe);
    state.recipe = createRecipeObject(data);
    addBookmark(state.recipe);
 
  } catch (error) {
    console.error(`${error.message}💥💥💥`);
    throw error;
  }

};