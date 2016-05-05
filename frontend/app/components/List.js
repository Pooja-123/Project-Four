import React from 'react';

function List(props){
  console.log(props);
  return (
    <div>
      <header>
        <h1>Health</h1>
      </header>

      <input type="text"
      placeholder="search"
      onchange={props.onUpdateSearch}
      />
      <ul className="design">

        {props.recordList}
      </ul>
    </div>
   );
}

export default List;
