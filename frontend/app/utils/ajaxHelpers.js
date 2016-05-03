import axios from 'axios';

const helpers ={
  showcontact: function() {
    return axios.get('http://localhost:3000/contacts.json')
  },

  createcontact: function(record){
    return axios.post('http://localhost:3000/contacts', record)
  },

  // SearchContact: function(){
  //   return axios.post('http://localhost:3000')
  // }

  destroycontact: function(id){
    return axios.delete('http://localhost:3000/contacts/'+id)
  }



};

export default helpers;
