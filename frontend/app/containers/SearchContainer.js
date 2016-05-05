
import React from "react";
import axios from "axios";
import ajaxHelpers from "../utils/ajaxHelpers";


const SearchContainer = React.createClass({
  getInitialState: function(){
    return {
      searchTerm: "",
      records: [],
      filtered: []
    };
  },
  onSearch: function(event){
    let searchInput = document.querySelector(".search-input").value
    this.setState({
      searchTerm: searchInput
    });
    // console.log(this.state.searchTerm);
  },
  componentDidMount: function(event){
    ajaxHelpers.search()
    .then(function(response){
      console.log("response.data",response.data.contact);
      this.setState({
        records: response.data.contact
      });
    }.bind(this));
  },
  onSubmit: function(){
    let search = this.state.searchTerm;
    let records = this.state.records;

    let filteredResults = [];


    for (var i = 0; i < records.length; i++){
      console.log(records[i].name);
      if (records[i].name){
        if (records[i].name.toLowerCase().indexOf(search.toLowerCase()) > -1) {
          filteredResults.push(records[i]);
        };
      }
    };
    this.setState({
      filtered: filteredResults
    })
  },
  render: function(){
    const recordList = this.state.filtered.map(function(record, index) {
        return (<div key={index}>{record.name}, {record.id}</div>)
    });
    return (
      <div>
        <label>Search for records: </label><input type="text" className="search-input" onChange={this.onSearch}/>
        <br />
        <button type="button" onClick={this.onSubmit}>Search!</button>
        <div>
          {recordList}
        </div>
      </div>
    )
  }
});


export default SearchContainer;
