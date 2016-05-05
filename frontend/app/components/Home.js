import React from 'react';
import List from './List';
import Hospital from './Hospital';
import AddContainer from '../containers/AddContainer';
import axios from 'axios';


import {Link} from 'react-router';




const Home = React.createClass({

  HospitalCall: function(){
    axios.get('https://data.cityofnewyork.us/resource/w7a6-9xrz.json')
    .then(function(response){
      console.log(response.data);
    })
  },

  render:function(){
    return (
      <div >
        <h1 id="health">Health</h1>

        <button id="wrap"type='button' onClick={this.HospitalCall}>List of Hospital Nyc</button>
        <Link to='/List'>
          <button id="list"type='button'>List of Doctors</button>
        </Link>
        <Link to='/Add'>
          <button id="add"type='button' onClick={this.props.onChangeDoctorName}>Add Record</button>
        </Link>
        <Link to='/Search'>
          <button id="search"type='button'>Search Record</button>
        </Link>
        <Link to = '/Delete'>
          <button id="delete"type='button' onClick={this.props.onSubmit}>Delete Record</button>
        </Link>

        </div>
    );
  }
});


export default Home;
