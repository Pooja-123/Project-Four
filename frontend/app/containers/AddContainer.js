import React, {PropTypes} from 'react';
import Add from '../components/Add';
import ajaxHelpers from '../utils/ajaxHelpers';


const AddContainer =React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired

  },
  getInitialState: function(){
    return {
      name: '',
      email: '',
      records:[]
    }
  },

  // updateValState: function(e) {
  //   this.setState ({
  //     DoctorName: e.target.value
  //     Specialist: e.target.value
  //   });
  // },
  handleChangeName: function(e){
    this.setState({
      name: e.target.value
    });
  },

  handleEmail: function(e){
    this.setState({
      email: e.target.value
    })
  },

  handleSubmit: function(e){
    e.preventDefault();
    this.setState({
      name: this.state.name,
      email: this.state.email
    });
    const record = {
      name: this.state.name,
      email: this.state.email
    };
    console.log(record);
    ajaxHelpers.createcontact(record)
    .then(function(response){
        console.log(response);
        this.setState({
          recordAdded: "Record Added"
        });
    }.bind(this));
  },

  render: function() {
    return (
      <div>
        <Add
          onChangeDoctorName={this.handleChangeName}

          onChangeSpecial={this.handleEmail}
          onSubmit={this.handleSubmit}

          recordAddedMsg={this.state.recordAdded}
          recordnew={this.state.record}
        />
      </div>

    );
  }

});

export default AddContainer;
