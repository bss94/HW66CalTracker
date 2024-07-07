import React, {useState} from 'react';
import SubmitBtn from './SubmitBtn/SubmitBtn';
import {Col, Form, Spinner} from 'react-bootstrap';

interface Props {
  isEdit?: boolean;
  isLoading?: boolean;
}

const MealForm: React.FC<Props> = ({
  isEdit,
  isLoading,

}) => {
  const [mealMutation, setMealMutation] = useState<MealMutation>({
    mealTime: '',
    food: '',
    calories: ''
  });
  const [isSending, setIsSending] = useState(false);

  const changeField = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const {name, value} = event.target;
    setMealMutation((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onFormSubmit = async (event: React.FormEvent) => {
    setIsSending(true);
    event.preventDefault();
    const postData: Meal = {
      ...mealMutation,
      calories: parseFloat(mealMutation.calories)
    };
  };

  return isLoading ?
    <div className="text-center mt-3">
      <Spinner className="mt-3" animation="border" variant="primary"/>
    </div>
    :
    (
      <>
        <Col/>
        <Col sm={10}>
          <Form onSubmit={onFormSubmit} className="mt-3">
            <Form.Text muted><h1>{isEdit ? 'Edit Meal' : 'Create Meal'}</h1></Form.Text>
            <Form.Group className="mt-3 mb-3"
                        controlId="meaLTime"
            >
              <Form.Label>Meal Time</Form.Label>
              <Form.Select
                name="mealTime"
                value={mealMutation.mealTime}
                onChange={changeField}
                required
              >

                <option value="">Select meal</option>
                <option value="Breakfast">Breakfast</option>
                <option value="Snack">Snack</option>
                <option value="Lunch">Lunch</option>
                <option value="Dinner">Dinner</option>

              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3"
                        controlId="food"
            >
              <Form.Label>Food</Form.Label>
              <Form.Control
                type="text"
                name="food"
                value={mealMutation.food}
                onChange={changeField}
                required
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="calories"
            >
              <Form.Label>Calories</Form.Label>
              <Form.Control
                type="number"
                name="calories"
                value={mealMutation.calories}
                onChange={changeField}
                required
              />

            </Form.Group>
            <div className="d-flex justify-content-end">
              <SubmitBtn isSending={isSending}/>
            </div>
          </Form>
        </Col>
        <Col/>
      </>
    );
};

export default MealForm;