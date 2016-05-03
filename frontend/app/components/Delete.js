import React from 'react';

function DeleteRecord(props){
  console.log('props.recordDeletedMsg:', props.recordDeletedMsg);

  return (
    <div>
      <h2>Delete Record:</h2>
      <input onChange={props.recordDelete} placeholder='Delete by name' type='text' />
      <button onClick={props.onSubmitRecord} type='button' >Delete</button>
      <h4>{props.recordDeletedMsg}</h4>
    </div>
  );
}


export default DeleteRecord;
