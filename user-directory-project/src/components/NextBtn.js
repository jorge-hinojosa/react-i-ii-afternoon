import React from 'react';

function NextBtn(props) {
  return(
    <button 
      onClick={()=> props.next()}
      className="Change-user">Next</button>
  )
}

export default NextBtn;