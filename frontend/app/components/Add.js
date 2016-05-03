import React from 'react';

const Add = React.createClass({
  getInitialState: function(){
    return{
      name:""
    }
  },
  componentDidMount: function(){
    console.log(this.props.name);
  },

  render: function(){
    return(
      <div className="add-input">
      <p>Add New Record</p>
        <div className="">
          Record name:  <input onChange={this.props.onChangeDoctorName} placeholder='Records '
            type='text' />

          Specialist: <input onChange={this.props.onChangeSpecial} placeholder='Records '
            type='text' /><br/><br/>
        </div>

          <button className=""type="submit" onClick={this.props.onSubmit}>
          Add!</button>
        <h4>{this.props.recordAddedMsg}</h4>

      </div>
    )
  }
});

export default Add
