import React from 'react';
import _ from 'lodash';
import List from '../components/List';
import ajaxHelpers from '../utils/ajaxHelpers';

const ListContainer = React.createClass({
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
  componentDidMount: function(){
    ajaxHelpers.showcontact()
    .then(function(response){
        console.log("showcontact:",response.data);
        this.setState({
          records: response.data.contact
        });
    }.bind(this));
  },
  render: function() {

    const recordListElements = [];
    for(const record of this.state.records){
      console.log(record);
      for(const key in record){
        recordListElements.push(<li className="eachrecord"> {record[key]}</li>);
      }
    }
    console.log(recordListElements);



    return (
      <List
        recordList={recordListElements}
        searchTerm={this.state.searchTerm}
        onUpdateSearch={this.onUpdateSearch}
      />
    );
  }

});

export default ListContainer;
