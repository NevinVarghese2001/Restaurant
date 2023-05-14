import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Operatingtime from './Operatingtime';
import Review from './Review';





function Restview() {

    const [restList,setRest]=useState([])

    //api to access data
    const getData=async ()=>{
     const result=await fetch('/restaurants.json')
     result.json().then(data=>setRest(data.restaurants))
    }
  
    
  

    //object create for useParams
    const params=useParams()
    console.log(params.id);

   const singleRest=restList.find(i=>i.id==params.id)
   console.log(singleRest);

   useEffect(()=>{
    getData()
  },[])


  return (
    <div>
       { 
       singleRest?
       (<Row >
            <Col lg={6} md={6}>
             <img className='w-75 container p-5 ms-5' style={{height:'41rem'}} src={singleRest.photograph}/>
             </Col>
             <Col lg={6} md={6} className=' p-5 mt-5' >
             <ListGroup >
                <ListGroup.Item><h1 className='text-danger '>{singleRest.name}</h1></ListGroup.Item>
                <ListGroup.Item><strong>Address : {singleRest.address}</strong></ListGroup.Item>
                <ListGroup.Item><strong>Cuisine Type : {singleRest.cuisine_type}</strong></ListGroup.Item>
                <ListGroup.Item><strong>Neighborhood : {singleRest.neighborhood}</strong></ListGroup.Item>
                <ListGroup.Item> 
                    <Operatingtime workingTime={singleRest.operating_hours}/>
                    <Review reviewlist={singleRest.reviews}/>
                    </ListGroup.Item>
            </ListGroup>
             </Col>
           
        </Row>):""
        }
       
    </div>
  )
}

export default Restview