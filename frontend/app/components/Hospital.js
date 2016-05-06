import React from 'react';

function Hospital(props){
  console.log(props.recordList);
  return (
    <div>
      <header>
        <h1>List of Ny Hospitals</h1>
      </header>
      
      <ul>

        {props.recordList}
      </ul>
    </div>
   );
}

export default Hospital;
