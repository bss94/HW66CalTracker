import React, {useCallback, useEffect, useState} from 'react';
import MealList from '../../components/MealList/MealList';
import {Col, Spinner} from 'react-bootstrap';
import {ApiMeals, Meal} from '../../types';
import axiosApi from '../../axiosApi';
import {toast} from 'react-toastify';

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
          (

            <MealList meals={meals} deleteMeal={deleteMeal}/>
          )
        }

      </Col>
      <Col/>
    </>
  );
};

export default Main;