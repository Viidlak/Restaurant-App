import React from 'react'
import { useParams } from 'react-router-dom'
import {useState,useEffect} from 'react'
import {Row,Col,Image} from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup';
import RestuarantOP from './RestuarantOP';
import RestuarantReview from './RestuarantReview';
import { useSelector } from 'react-redux';
 function RestuarantDetails() {
  const urlParams = useParams()
  console.log(urlParams.id);

  //const [restuarantList,setRestuarantList]= useState([])
  // const fetchData = async()=>{
  //   await  fetch('/restaurants.json')
  //   .then((data)=>data.json()
  //   .then(res=>setRestuarantList(res.restaurants))
  //   //.then(res=>console.log(res.restaurants))
  //   )
  // }
  const {restuarantList}=useSelector((state)=>state.restListReducer)
    console.log(restuarantList)
  //to load items or values when a component is created
  useEffect(()=>{
      //fetchData()
  }
  ,[])
  const restuarant = restuarantList.find(item=>(
    item.id==urlParams.id
  ))
  console.log(restuarant);

  return (
    <div>
     { 
     restuarant?(
     <Row className="my-3">
        <Col md={3}>
        <Image className='border rounded' src={restuarant.photograph} fluid></Image>
        </Col>
        <Col className="mx-5" md={8}>
        <ListGroup>
      <ListGroup.Item>
        <h2>{restuarant.name}</h2>
        <p>{restuarant.neigborhood}</p>
      </ListGroup.Item>
      <ListGroup.Item>
        <p>Cuisine type:&nbsp; {restuarant.cuisine_type}</p>
      </ListGroup.Item>
      <ListGroup.Item>
        <p>Address: &nbsp;{restuarant.address}</p>
      </ListGroup.Item>
      <ListGroup.Item>
      <RestuarantOP op={restuarant.operating_hours}/>
      
      </ListGroup.Item>
      <ListGroup.Item>
        <Row>
          <RestuarantReview data={restuarant.reviews}/>
        </Row>
      </ListGroup.Item>
    </ListGroup>

        </Col>
        </Row>
  ):'No Data to display'
  }
    </div>
  )
}
export default RestuarantDetails