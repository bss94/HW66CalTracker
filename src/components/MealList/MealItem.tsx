import React from 'react';
import {Button, Card} from 'react-bootstrap';

interface Props{
  time:string;
  food:string;
  calories:number;
}
const MealItem:React.FC<Props> = ({
  time,
  food,
  calories,

}) => {
  return (
    <Card className="d-flex align-items-center justify-content-between flex-row">
      <Card.Body>
        <Card.Text>
           {time}
        </Card.Text>
        <Card.Subtitle>{food}</Card.Subtitle>
        <Card.Title className="mt-2">{calories}</Card.Title>
      </Card.Body>

      <Card.Body className="d-flex align-items-end  flex-column">
        <Button className="my-1" variant="success">Edit</Button>
        <Button className="my-1" variant="danger">Delete</Button>
      </Card.Body>

    </Card>
  );
};

export default MealItem;