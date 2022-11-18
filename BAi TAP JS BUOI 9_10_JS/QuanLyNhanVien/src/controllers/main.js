function getEle(id) {
  return document.getElementById(id);
}

function layInfoNV() {
  // Lấy thông tin từ user nhập
  var taiKhoan = getEle("tknv").value;
  var hoTen = getEle("name").value;
  var email = getEle("email").value;
  var matKhau = getEle("password").value;
  var ngayLam = getEle("datepicker").value;
  var luongCoBan = getEle("luongCB").value;
  var chucVu = getEle("chucvu").value;
  var gioLam = getEle("gioLam").value;
  // tạo đối tượng từ lớp đối tượng Nhân viên
  var NV = new NhanVien(
    taiKhoan,
    hoTen,
    email,
    matKhau,
    ngayLam,
    luongCoBan,
    chucVu,
    gioLam
  );
  // tính tổng lương
  NV.tinhLuong();

  return NV;
}

/**
 * Thêm Nhân Viên
 */
document.getElementById("btnThemNV").onclick = function () {
  var NV = layInfoNV();
  console.log(NV);
};
