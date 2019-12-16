import axios from 'axios';

export default {
    postCalls(route, data) {
      return axios.post('http://localhost:5000' + route, data)
        .then(response => {
          return response;
        })
    },
    getCalls(route) {
      return axios.get('http://localhost:5000' + route)
        .then(response => {
          return response;
        })
    },
    getSearch(route) {
      return axios.get('http://localhost:5000' + route)
        .then(response => {
          return response;
        })
    },
    deleteCalls(route) {
      return axios.delete('http://localhost:5000' + route)
        .then(response => {
          return response;
        })
    },
    putCalls(route, data) {
      return axios.put('http://localhost:5000' + route, data)
        .then(response => {
          return response;
        })
    }
  }