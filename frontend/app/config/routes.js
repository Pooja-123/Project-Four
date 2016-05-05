import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import ListContainer from '../containers/ListContainer';
import AddContainer from '../containers/AddContainer';
import DeleteContainer from '../containers/DeleteContainer';
import SearchContainer from '../containers/SearchContainer';
import HospitalContainer from '../containers/HospitalContainer';
import Main from '../components/Main';
import Home from '../components/Home';
import Header from '../components/Header';

const routes =(
  <Router history ={hashHistory}>
    <Route path='/'component={Main}>
      <IndexRoute component={Home} />
      <Route path='List' component={ListContainer} />
      <Route path='Add' component={AddContainer} />
      <Route path='Delete'component={DeleteContainer} />
      <Route path='Search' component={SearchContainer} />
      
      </Route>
    </Router>

);

export default routes;
