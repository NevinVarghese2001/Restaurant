import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';

function Operatingtime({workingTime}) {

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='mt-2'>
        <Button variant="primary" onClick={handleShow}>
        Operating Hours
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Operating Hours</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <ListGroup>
      <ListGroup.Item><strong>Monday {workingTime.Monday}</strong> </ListGroup.Item>
      <ListGroup.Item><strong>Tuesday {workingTime.Tuesday}</strong> </ListGroup.Item>
      <ListGroup.Item><strong>Wednesday {workingTime.Wednesday}</strong> </ListGroup.Item>
      <ListGroup.Item><strong>Thursday {workingTime.Thursday}</strong> </ListGroup.Item>
      <ListGroup.Item><strong>Friday {workingTime.Friday}</strong> </ListGroup.Item>
      <ListGroup.Item><strong>Saturday {workingTime.Saturday}</strong> </ListGroup.Item>
      <ListGroup.Item><strong>Sunday {workingTime.Sunday}</strong> </ListGroup.Item>
    </ListGroup>
        </Modal.Body>
       
      </Modal>
    </div>
  )
}

export default Operatingtime