
import React from "react";

const Search = React.createClass({
  render: function(){
    const recordList = this.props.records.map((record,index)  {

    });
    return (
      <div key={records.index} style={RecordStyles.records}>
      <h3>{records.name}</h3>
        // <input onChange={props.recordDelete} placeholder='Delete by name' type='text' />
        // <button onClick={props.onSubmitRecord} type='button' >Delete</button>
      </div>
    )
  }
});

export default Search;
