import React  from 'react';
import {useState,useEffect} from 'react';
import RestuarantCard from './RestuarantCard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {allRestuarants} from '../actions/restuarantListAction'
import { useDispatch,useSelector } from 'react-redux';

 function RestuarantsList() {
//create state for holding restaurantlist
    //const [restuarantList,setRestuarantList]= useState([])
    // api call
    // const fetchData = async()=>{
    //   await  fetch('/restaurants.json')
    //   .then((data)=>data.json()
    //   .then(res=>setRestuarantList(res.restaurants))
    //   //.then(res=>console.log(res.restaurants))
    //   )
    // }

    const dispatch=useDispatch()
    //to load items or values when a component is created
    const {restuarantList}=useSelector((state)=>state.restListReducer)
    console.log(restuarantList)
    useEffect(()=>{
        //fetchData()
        dispatch(allRestuarants())
    }
    ,[])
    console.log(restuarantList);
  return (
    //RestuarantCard
    <Row>
      {restuarantList.map(restuarant=>(
       <Col md={6} lg={4} xl={3}> 
       <RestuarantCard item={restuarant}/></Col>
      ))}
    </Row>
  )
}
export default RestuarantsList
