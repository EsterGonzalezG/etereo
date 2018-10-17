import axios from 'axios';

export function getListPhones() {
  
        return axios.get('http://localhost:3001/phones');

}
