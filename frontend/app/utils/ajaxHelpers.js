import axios from 'axios';

const helpers ={
  showcontact: function() {
    return axios.get('http://localhost:3000/contacts.json')
  },

  createcontact: function(record){
    return axios.post('http://localhost:3000/contacts', record)
  },

  search: function(){
    // this ajax call is supposed to get all the contacts so we can filter it later.
    return axios.get('http://localhost:3000/contacts.json')
  },

  destroycontact: function(id){
    // this ajax call takes the id of a record and then sends it to the server to delete
    return axios.delete('http://localhost:3000/contacts/'+id)
  }




};

export default helpers;
