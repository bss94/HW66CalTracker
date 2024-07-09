import React, {useCallback, useEffect, useState} from 'react';
import MealList from '../../components/MealList/MealList';
import {Col, Spinner} from 'react-bootstrap';
import {ApiMeals, Meal} from '../../types';
import axiosApi from '../../axiosApi';

const Main = () => {
  const [meals,setMeals]=useState<Meal[]>([])
  const [loading,setLoading]=useState(false);

  const fetchMeals=useCallback(async ()=>{
    try{
    setLoading(true);
    const { data: meals } = await axiosApi.get<ApiMeals | null>(
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
  } finally {
    setLoading(false);

  }
  },[])

  useEffect(()=>{
    void fetchMeals()
  },[fetchMeals])

  return (
    <>
      <Col/>
      <Col sm={8}>
        {loading&&<Spinner/>}
        <MealList meals={meals}/>
      </Col>
      <Col/>

    </>
  );
};

export default Main;