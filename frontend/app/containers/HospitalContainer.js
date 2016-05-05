import React from 'react';
import _ from 'lodash';
import Hospital from '../components/Hospital';
import ajaxHelpers from '../utils/ajaxHelpers';

const HospitalContainer = React.createClass({
  getInitialState: function(){
    return {
      searchTerm: '',
      isLoading: true,
      records: []
    }
  },
  onUpdateSearch: function(e){
    console.log(e.target.value);
    this.setState({
      searchTerm: e.target.value
    });
  },


    HospitalCall: function(){
      axios.get('https://data.cityofnewyork.us/resource/w7a6-9xrz.json')
      .then(function(response){
        console.log(response.data);
          this.setState({
            records: response.data
          });
      })
    },


  render: function() {
    const recordListElements = [];
    for(const record of this.state.records){
      console.log(record);
      for(const key in record){
        recordListElements.push(<li> {record[key]}</li>);
      }
    }
    console.log(recordListElements);


    return (
      <div>
        <Hospital
          recordList={recordListElements}
          hospitalapi={HospitalCall}
          searchTerm={searchTerm}
          onUpdateSearch={onUpdateSearch}
        />
      </div>
    );
  }

});

export default HospitalContainer;
