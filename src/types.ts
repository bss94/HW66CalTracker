
export interface Meal{
  id:string;
  mealTime:string;
  food:string;
  calories:number
}
export type ApiMeal = Omit<Meal, 'id'>
export interface ApiMeals {
  [id: string]: ApiMeal;
}
export interface MealMutation{
  mealTime:string;
  food:string;
  calories:string;
}