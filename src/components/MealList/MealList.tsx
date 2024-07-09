import React from 'react';
import MealItem from './MealItem';
import {Meal} from '../../types';

interface Props {
  meals:Meal[]
}
const MealList:React.FC<Props> = ({meals}) => {
  return (
    <>
      {meals.map(meal=>(
        <MealItem time={meal.mealTime} calories={meal.calories}  food={meal.food} key={meal.id}/>
      ))}
    </>
  );
};

export default MealList;