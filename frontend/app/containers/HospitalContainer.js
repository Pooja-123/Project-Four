import React from 'react';
import Hospital from '../components/Hospital';
import ajaxHelpers from '../utils/ajaxHelpers';
// import axios from 'axios';

const HospitalContainer = React.createClass({
  getInitialState: function(){
    return {
      searchTerm: '',
      isLoading: true,
      records: []
    }
  },
  //  onUpdateSearch: function(e){
  //    console.log(response.data);
  //    this.setState({
  //    searchTerm: response.data
  //   });
  // },
  componentDidMount: function(){
    // this.props.fetchProfile();
  // HospitalCall: function(){
      ajaxHelpers.hospitalCall()
      .then(function(response){
      console.log(response.data);
        this.setState({
          records: response.data
        });
    }.bind(this));
  },

  render: function() {
    var recordListElements = [];

    for (var i = 0; i < this.state.records.length; i++) {
      recordListElements.push(<p>{this.state.records[i].facility_name}</p>);
    }
    console.log(recordListElements);


    return (
      <div>
        {recordListElements}
      </div>
    );
  }

});

export default HospitalContainer;
