import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Restaurant.css'
import { Link } from 'react-router-dom';



function Restaurant() {

  const [restList,setRest]=useState([])

  //api to access data
  const getData=async ()=>{
   const result=await fetch('/restaurants.json')
   result.json().then(data=>setRest(data.restaurants))
  }
  console.log(restList);

  useEffect(()=>{
    getData()
  },[])
  return (
    <Row className='text-center ms-5 mb-5 p-2'> 
      {
        restList.map(rest=>(
      <Col id='c1' lg={4} md={6} className='p-2 text-center'>
        <Link id='l1' to={`/viewRest/${rest.id}`}>
          <Card className='ms-3 mt-3' style={{ width: '18rem' ,minHeight:'26rem' }}>
          <Card.Img variant="top" style={{ height: '18rem'   }} src={rest.photograph} />
          <Card.Body>
            <Card.Title>{rest.name}</Card.Title>
            <Card.Text id='cadd'>
              {rest.address}
            </Card.Text>
          </Card.Body>
        </Card>
        </Link> 
      </Col>       ))
      }
      
      </Row>

  )
}

export default Restaurant