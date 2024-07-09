import React from 'react';
import {Button, Card} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

interface Props{
  time:string;
  food:string;
  calories:number;
  id:string;
  deleteMeal:VoidFunction;
}
const MealItem:React.FC<Props> = ({
  time,
  food,
  calories,
  id,
  deleteMeal

}) => {
  return (
    <Card className="d-flex align-items-center justify-content-between flex-row p-2">
      <Card.Body>
        <Card.Text>
           {time}
        </Card.Text>
        <Card.Subtitle className="text-capitalize">{food.toLowerCase()}</Card.Subtitle>
        <Card.Title className="mt-2">{calories} kcal</Card.Title>
      </Card.Body>

      <Card.Body className="d-flex align-items-end  flex-column">
        <NavLink to={`/meal/${id}/edit`} className="btn btn-success my-1">Edit</NavLink>
        <Button className="my-1" variant="danger" onClick={deleteMeal}>Delete</Button>
      </Card.Body>

    </Card>
  );
};

export default MealItem;