import React from 'react';
import axios from 'axios';
import Delete from '../components/Delete';
import ajaxHelpers from '../utils/ajaxHelpers';

const DeleteRecordContainer = React.createClass({
  getInitialState: function() {
    return {
      // ajaxReturn: [],
      id: '',
      recordDeleted: ''
    };
  },

  onChangeName: function(e) {
    console.log('onChangeName was called!');
    this.setState({
      id: e.target.value
    })
  },

  onSubmitRecord: function() {
    console.log("onSubmitRecord was called!");

    const id = this.state.id;
    console.log('const id:', id);

    ajaxHelpers.destroycontact(id)
    .then(function(response){
      console.log("Response.data:", response.data.contact);
      this.setState({
        recordDeleted: "Record deleted!"
      });
      console.log('this.state:', this.state);
    }.bind(this))
    .catch(function(err){
      console.warn('Error');
      return err;
    })
  },

  render: function(){
    return(
  <div className="main-container">
          <Delete
          recordDelete ={this.onChangeName}
          onSubmitRecord={this.onSubmitRecord}
          recordDeletedMsg={this.state.recordDeleted}
          />
      </div>
    )
  }
});

export default DeleteRecordContainer;
