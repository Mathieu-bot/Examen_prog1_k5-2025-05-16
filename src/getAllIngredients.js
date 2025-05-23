const getAllIngredients = (recipes) => {
  let ingredients = [];
  for (let v of recipes.slice(1)) {
    for (let e of v.split(" ")) {
      if (e && !ingredients.includes(e)) {
        ingredients.push(e);
      }
    }
  }
  console.log(ingredients);

  return ingredients.length;
};

module.exports = getAllIngredients;
