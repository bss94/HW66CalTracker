import React, {useCallback, useEffect, useState} from 'react';
import MealList from '../../components/MealList/MealList';
import {Col, Spinner} from 'react-bootstrap';
import {ApiMeals, Meal} from '../../types';
import axiosApi from '../../axiosApi';
import {toast} from 'react-toastify';
import {NavLink} from 'react-router-dom';

const Main = () => {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchMeals = useCallback(async () => {
    try {
      setLoading(true);
      const {data: meals} = await axiosApi.get<ApiMeals | null>(
        '/meals.json',
      );
      console.log(meals);
      if (!meals) {
        setMeals([]);
      } else {
        const newMeals = Object.keys(meals).map((id) => ({
          ...meals[id],
          id,
        }));
        setMeals(newMeals);
      }
    } catch (e) {
      toast.error('Can not found Meals ' + e);
    } finally {
      setLoading(false);

    }
  }, []);

  useEffect(() => {
    void fetchMeals();
  }, [fetchMeals]);

  const deleteMeal = async (id: string) => {
    try {
      if (window.confirm('Are you sure wanna delete this Meal?')) {
        await axiosApi.delete(`/meals/${id}.json`);
        toast.success('Deleted');
        await fetchMeals();
      }
    } catch (e) {
      toast.error('Could not delete this Meal');
    }
  };

  return (
    <>
      <Col/>
      <Col sm={8}>
        {loading
          ?
          (<div className="text-center mt-3">
            <Spinner className="mt-3" animation="border" variant="success"/>
          </div>)
          :
          (<div className="d-flex justify-content-between align-items-center mt-4 p-3">
              <h4>Total calories: <strong>{meals.reduce((sum, meal) => {
                return sum + meal.calories;
              }, 0)}</strong></h4>
              <NavLink className="btn btn-success" to={'/meal/add'}>Add new Meal</NavLink>
            </div>
          )
        }
        <MealList meals={meals} deleteMeal={deleteMeal}/>

      </Col>
      <Col/>
    </>
  );
};

export default Main;