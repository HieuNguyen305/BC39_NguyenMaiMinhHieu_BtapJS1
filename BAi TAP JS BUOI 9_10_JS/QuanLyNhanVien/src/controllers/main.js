// tạo đối tượng dsnv theo kiểu global
var dsnv = new DanhSachNhanVien();
getLocalStorage();

function getEle(id) {
  return document.getElementById(id);
}
function getInfoNV() {
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
function renderTable(data) {
  var content = "";
  for (var i = 0; i < data.length; i++) {
    var sv = data[i];
    content += `
    <tr>
      <td>${sv.taiKhoan}</td>
      <td>${sv.hoTen}</td>
      <td>${sv.email}</td>
      <td>${sv.ngayLam}</td>
      <td>${sv.chucVu}</td>
      <td>${sv.tongLuong}</td>
      <td>${sv.loaiNhanVien}</td>
    </tr>
    `;
  }
  getEle("tableDanhSach").innerHTML = content;
}
function setLocalStorage() {
  //JSON => String
  var string = JSON.stringify(dsnv.arr);
  //save data to localStorage
  localStorage.setItem("DSNV", string);
}
// function getLocalStorage() {
//   if (localStorage.getItem("DSNV")) {
//     var string = localStorage.getItem("DSNV");
//     //convert string => JSON
//     dsnv.arr = JSON.parse(string);
//     renderTable(dsnv.arr);
//   }
// }
function getLocalStorage() {
  if (localStorage.getItem("DSNV")) {
    var string = localStorage.getItem("DSNV");
    //convert string => JSON
    dsnv.arr = JSON.parse(string);
    renderTable(dsnv.arr);
  }
}
/**
 * Thêm Nhân Viên
 */
getEle("btnThemNV").onclick = function () {
  var NV = getInfoNV();
  dsnv.themNV(NV);
  //render danh sach nhan vien da them ra UI
  renderTable(dsnv.arr);
  setLocalStorage();
};
