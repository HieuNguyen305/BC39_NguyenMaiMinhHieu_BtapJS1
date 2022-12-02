var productService = new ProductService();
function getEle(id) {
  return document.getElementById(id);
}
function getListProduct() {
  var promise = productService.getListProductApi();
  promise
    .then(function (rs) {
      //Resolve
      renderHTML(rs.data);
    })
    .catch(function (error) {
      //Reject
      console.log(error);
    });
  renderHTML(productService.arr);
}
getListProduct();

function renderHTML(data) {
  var content = "";
  data.forEach(function (product) {
    content += `
    <div class="our-team-item col-sm-3 col-6 py-3 mt-lg-0 animate__animated animate__fadeInLeft animate__delay-1s">
        <div class="our-team-img">
            <img src="./images/JPG FILE/${product.hinhAnh}" alt="">
        </div>
        <div class="our-team-info">
            <div class="our-team-info-item container">
                <div class="info-top ">
                    <h4>${product.ngonNgu}</h4>
                    <h3>${product.hoTen}</h3>
                </div>
                <div class="info-bottom">
                    <p>
                    ${product.moTa}
                    </p>
                </div>
            </div>
        </div>
    </div>
    `;
  });
  getEle("infoUser").innerHTML = content;
}
