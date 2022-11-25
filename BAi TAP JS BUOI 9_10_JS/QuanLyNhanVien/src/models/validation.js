function Validation() {
  this.kiemTraRong = function (value, errorID, message) {
    if (value === "") {
      getEle(errorID).innerHTML = message;
      getEle(errorID).style.display = "block";
      return false;
    }
    getEle(errorID).innerHTML = "";
    getEle(errorID).style.display = "none";
    return true;
  };
  this.kiemTraDoDaiKyTu = function (value, errorID, mess, min, max) {
    if (min <= value.trim().length && value.trim().length <= max) {
      getEle(errorID).innerHTML = "";
      getEle(errorID).style.display = "none";
      return true;
    }
    getEle(errorID).innerHTML = mess;
    getEle(errorID).style.display = "block";
    return false;
  };
  this.kiemTraChuoiKiTu = function (value, errorID, mess) {
    var content =
      "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
      "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
      "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";
    if (value.match(content)) {
      getEle(errorID).innerHTML = "";
      getEle(errorID).style.display = "none";
      return true;
    }
    getEle(errorID).innerHTML = mess;
    getEle(errorID).style.display = "block";
    return false;
  };
  this.kiemTraEmail = function (value, errorID, mess) {
    var content = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (value.match(content)) {
      getEle(errorID).innerHTML = "";
      getEle(errorID).style.display = "none";
      return true;
    }
    getEle(errorID).innerHTML = mess;
    getEle(errorID).style.display = "block";
    return false;
  };
  this.kiemTraMatKhau = function (value, errorID, mess, min, max) {
    var content =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/;
    if (value.match(content) && min <= value.length && value.length <= max) {
      getEle(errorID).innerHTML = "";
      getEle(errorID).style.display = "none";
      return true;
    }
    getEle(errorID).innerHTML = mess;
    getEle(errorID).style.display = "block";
    return false;
  };
  // this.kiemTraNgayLam = function (value, errorID, mess) {
  //   var content = Date.parse( + yyyy / mm / dd);
  //   if (value.match(content)) {
  //     getEle(errorID).innerHTML = "";
  //     getEle(errorID).style.display = "none";
  //     return true;
  //   }
  //   getEle(errorID).innerHTML = mess;
  //   getEle(errorID).style.display = "block";
  //   return false;
  // };
  this.kiemTraTienLuong = function (value, errorID, mess, min, max) {
    if (min <= value && value <= max) {
      getEle(errorID).innerHTML = "";
      getEle(errorID).style.display = "none";
      return true;
    }
    getEle(errorID).innerHTML = mess;
    getEle(errorID).style.display = "block";
    return false;
  };

  // this.kiemTraChucVu = function (idSelect, errorId, mess) {
  //   if (getEle(idSelect).selectedIndex !== 0) {
  //     getEle(errorId).innerHTML = "";
  //     getEle(errorId).style.display = "none";
  //     return true;
  //   }
  //   getEle(errorId).innerHTML = mess;
  //   getEle(errorId).style.display = "block";
  //   return false;
  // };
  this.kiemTraSoGioLam = function (value, errorID, mess, min, max) {
    if (min <= value && value <= max) {
      getEle(errorID).innerHTML = "";
      getEle(errorID).style.display = "none";
      return true;
    }
    getEle(errorID).innerHTML = mess;
    getEle(errorID).style.display = "block";
    return false;
  };
}
