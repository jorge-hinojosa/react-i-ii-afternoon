import React from 'react';

function PrevBtn(props) {
  return(
    <button 
      onClick={()=> props.prev()}
      className="Change-user">Previous</button>
  )
}

export default PrevBtn;