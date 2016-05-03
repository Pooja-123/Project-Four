// import React, { PropTypes } from 'react';
// import _from 'lodash'
// // import axios from "axios";
// import SearchRecord from '../components/Search';
// import ajaxHelpers from '../utils/ajaxHelpers';
//
//
// const SearchContainer= React.createClass({
//   getInitialState: function(){
//     return {
//        SearchTerm: '',
//        isLoading: true,
//        records: []
//     }
//   },
//   onSearch: function(e){
//     console.log(e.target.value);
//     this.setState({
//       SearchTerm: e.target.value
//     });
//   },
//
//   handleSubmit: function(e){
//     e.preventDefault();
//     const searchrecord ={
//     SearchTerm = e.target.value
//     };
//     ajaxHelpers.SearchContact(searchrecord)
//     .then(function(response){
//       console.log("response.data", response.data);
//       this.setState({
//         records: response.data
//       });
//     }.bind(this));
//   },
//   render: function () {
//
//     // const recordListElements =[];
//     // for (const record of this state.records)
//     // for(const key in record){
//
//     }
//     return (
//       <search.{this.SearcRecordhAjaxCall} />
//     )
//     }
//   }
// });
//
// export default SearchContainer;
