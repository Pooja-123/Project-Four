import React from 'react';
import List from './List';
import AddContainer from '../containers/AddContainer';


import {Link} from 'react-router';


const Home = React.createClass({
  render:function(){
    return (
      <div >
        <h1>Health Hospital</h1>
        <Link to='/List'>
          <button type='button'>List of Doctors</button>
        </Link>
        <Link to='/Add'>
          <button type='button onClick={this.props.onChangeDoctorName}'>Add Record</button>
        </Link>
        <Link to='/Search'>
        <button type='button onClick={this.props.onSubmit}'>Search Record</button>
        </Link>
        <Link to = '/Delete'>
        <button type='button onClick={this.props.onSubmit}'>Delete Record</button>
        </Link>

        </div>
    );
  }
});


export default Home;
