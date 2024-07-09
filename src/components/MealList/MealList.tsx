import React from 'react';
import MealItem from './MealItem';
import {Meal} from '../../types';

interface Props {
  meals: Meal[];
  deleteMeal: (id: string) => void;
}

const MealList: React.FC<Props> = ({meals, deleteMeal}) => {
  return (
    <>
      {meals.map(meal => (
        <MealItem
          time={meal.mealTime}
          calories={meal.calories}
          food={meal.food}
          id={meal.id}
          deleteMeal={() => deleteMeal(meal.id)}
          key={meal.id}/>
      ))}
    </>
  );
};

export default MealList;