import React from 'react';

function ListDisplay( {items}) {
  // This is used to display the items....
  return (
    <>
    <h2>List of Items</h2>
    <ul>
      {
        items.map((item,index)=>(
          <li key={index}>{item} </li>
        ))
      }
    </ul>
    </>
  )
}

export default ListDisplay;
