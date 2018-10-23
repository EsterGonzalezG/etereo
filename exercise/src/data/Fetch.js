import axios from 'axios';

export function getListPhones() {
  
      return  axios.get('http://localhost:3001/phones')
                .then(phones => {
                        return phones.data.phones;
                });

}
