var search = function (event) {
    event.preventDefault();
  
    var ingredients = document.getElementById("ingredients").value;
    ingredients = ingredients.toLowerCase();

    getCocktail(ingredients);
    ingredientsSearchTerm.textContent = ingredients;
    document.getElementById("ingredients").value = "";
  };
  document.querySelector("#search-form").addEventListener("submit", search);

  //

