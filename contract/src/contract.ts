import { NearBindgen, near, call, view,Vector } from 'near-sdk-js';

@NearBindgen({})
class RecipeInfo {
  constructor(public name: string, public title: string, public description: string, public imageLink: string) {}
}

// Crea una colección para almacenar las recetas
let recipes = new Vector<RecipeInfo>('r');

// Esta función toma los datos del formulario y los almacena en la cadena de bloques de NEAR
export function submitRecipe(name: string, title: string, description: string, imageLink: string): void {
  const newRecipe = new RecipeInfo(name, title, description, imageLink);
  recipes.push(newRecipe);
}

// Esta función permite obtener todas las recetas almacenadas
export function getAllRecipes(): RecipeInfo[] {
  const recipeList: RecipeInfo[] = [];
  for (let i = 0; i < recipes.length; i++) {
    recipeList.push(recipes[i]);
  }
  return recipeList;
}