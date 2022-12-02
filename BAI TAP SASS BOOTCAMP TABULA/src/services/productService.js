function ProductService() {
  this.getListProductApi = function () {
    //Pending
    var promise = axios({
      url: "https://637b69966f4024eac20ce0aa.mockapi.io/api/ProductApiAxios",
      method: "GET",
    });
    return promise;
  };
}
