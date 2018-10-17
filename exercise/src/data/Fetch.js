
export function getListPhones() {
    const url = 'http://localhost:3001/phones';
    return fetch(url)
      .then(response => response.json())
      .then(data => {
          console.log(data.phones);
        return data.phones;
      });
  }
