export const apiCB = (_this) => {
  fetchData(_this)
}

const fetchData = (_this) => {
  _this.setState({
    isLoading: true
  })
  return fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(responseJson => {
    _this.setState({
      dataSource: responseJson,
      isLoading: false
    });
  })
  .catch((error) =>{
    console.error(error);
  });
  };