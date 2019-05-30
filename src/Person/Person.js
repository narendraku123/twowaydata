import React from 'react';
import Person from './Person.css';

const person = ( props) => {

return ( <div className="person">
         <p> This is an funcaion example </p>
         <p> This is Dynamic Values generated using the React Math { Math.floor (Math.random() * 45)} </p>
         <h2> My Name is { props.name}  and age is { props.Age} </h2>
         <p>this is props children method { props.children} </p>
         <input type="text" onChange={ props.Changed}/>


   </div>)

} ;

export default person;
