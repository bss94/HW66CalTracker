import React from 'react';
import {Button, Spinner} from 'react-bootstrap';


interface Props {
  isSending: boolean;
}

const SubmitBtn: React.FC<Props> = ({isSending}) => (
  <>
    <Button variant="primary"
            type="submit"
            disabled={isSending}
    >
      {isSending
        ? <>
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
          />
          <span className="visually-hidden">Loading...</span>
        </>
        : 'Save'
      }
    </Button>
  </>
);


export default SubmitBtn;