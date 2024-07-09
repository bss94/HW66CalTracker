import React, {useCallback, useEffect, useState} from 'react';
import MealForm from '../../components/MealForm/MealForm';
import axiosApi from '../../axiosApi';
import {ApiMeal} from '../../types';
import {useNavigate, useParams} from 'react-router-dom';
import {toast} from 'react-toastify';
import {Col, Spinner} from 'react-bootstrap';

const EditMeal = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  const [meal, setMeal] = useState<ApiMeal | null>(null);
  const [isUpdating, setIsUpdating] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  const fetchUpdatingMeal = useCallback(async () => {
    try {
      setIsFetching(true);
      const {data: meal} = await axiosApi.get<ApiMeal | null>(
        `/meals/${id}.json`,
      );
      if (!meal) {
        setMeal(null);
        toast.error('can not found this meal');
      } else {
        setMeal(meal);
      }
    } catch (e) {
      toast.error('can not found this meal ' + e);
    } finally {
      setIsFetching(false);

    }
  }, [id]);

  useEffect(() => {
    void fetchUpdatingMeal();
  }, [fetchUpdatingMeal]);

  const updateMeal = async (meal: ApiMeal) => {
    try {
      setIsUpdating(true);
      await axiosApi.put(`/meals/${id}.json`, meal);
      toast.success('Meal updated!');
    } catch (e) {
      toast.error('Meal cant updated!');
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <Col>
      {isFetching && (<div className="text-center mt-3">
        <Spinner className="mt-3" animation="border" variant="success"/>
      </div>)}
      {meal && <MealForm
        onSubmit={updateMeal}
        existingMeal={meal}
        isEdit
        isSending={isUpdating}
      />}

    </Col>
  );
};

export default EditMeal;