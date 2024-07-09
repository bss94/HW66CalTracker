import React, {useState} from 'react';
import MealForm from '../../components/MealForm/MealForm';
import {useNavigate} from 'react-router-dom';
import axiosApi from '../../axiosApi';
import {toast} from 'react-toastify';
import {ApiMeal} from '../../types';


const AddMeal = () => {
  const [isCreating, setIsCreating] = useState(false);
  const navigate = useNavigate();
  const createMeal = async (meal: ApiMeal) => {
    try {
      setIsCreating(true);
      await axiosApi.post('/meals.json', meal);
      navigate('/');
      toast.success('Meal created');
    } catch (e) {
      toast.error('Error, create lost ' + e);
    } finally {
      setIsCreating(false);
    }
  };

  return (
    <>
      <MealForm isSending={isCreating} onSubmit={createMeal}/>
    </>
  );
};

export default AddMeal;