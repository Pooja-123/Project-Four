import React from 'react';

function Hospital(props){
  console.log(props);
  return (
    <div>
      <header>
        <h1>List of Ny Hospitals</h1>
      </header>
      <input type="text"
        placeholder="search"
        onchange={props.onUpdateSearch}
      />
      <ul>

        {props.hospitalapi}
      </ul>
    </div>
   );
}

export default Hospital;
