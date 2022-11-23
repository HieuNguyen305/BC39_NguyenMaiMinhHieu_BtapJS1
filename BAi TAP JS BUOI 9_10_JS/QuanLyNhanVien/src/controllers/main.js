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
  //xếp loại nhân viên
  NV.xeploaiNhanVien();

  return NV;
}
function renderTable(data) {
  var content = "";
  for (var i = 0; i < data.length; i++) {
    var nv = data[i];
    content += `
    <tr>
      <td>${nv.taiKhoan}</td>
      <td>${nv.hoTen}</td>
      <td>${nv.email}</td>
      <td>${nv.ngayLam}</td>
      <td>${nv.chucVu}</td>
      <td>${nv.tongLuong}</td>
      <td>${nv.loaiNhanVien}</td>
      <td>
          <button class="btn btn-info" onclick="editNV('${nv.taiKhoan}')">Edit</button>    
          <button class="btn btn-danger" onclick="deleteNV('${nv.taiKhoan}')">Delete</button>
      </td>
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
function getLocalStorage() {
  if (localStorage.getItem("DSNV")) {
    var string = localStorage.getItem("DSNV");
    //convert string => JSON
    dsnv.arr = JSON.parse(string);
    renderTable(dsnv.arr);
  }
}
function deleteNV(taiKhoan) {
  dsnv.xoaNV(taiKhoan);
  renderTable(dsnv.arr);
  setLocalStorage();
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

/**
 * Edit NV
 */
function editNV(taiKhoan) {
  var nv = dsnv.getinfoNV(taiKhoan);
  if (nv) {
    getEle("tknv").value = nv.taiKhoan;
    getEle("tknv").disabled = true;
    getEle("name").value = nv.hoTen;
    getEle("email").value = nv.email;
    getEle("password").value = nv.matKhau;
    getEle("datepicker").value = nv.ngayLam;
    getEle("luongCB").value = nv.luongCoBan;
    getEle("chucvu").value = nv.chucVu;
    getEle("gioLam").value = nv.gioLam;

    getEle("btnCapNhat").style.display = "inline-block";
    getEle("btnThemNV").style.display = "none";
  }
}

/**
 * Update Nv
 */
getEle("btnCapNhat").addEventListener("click", function () {
  var nv = getInfoNV();
  dsnv.capNhatNV(nv);
  renderTable(dsnv.arr);
  setLocalStorage();
});

/**
 * Tìm kiếm nhân viên dựa theo xếp loại
 */
getEle("btnTimNV").addEventListener("click", function () {
  // console.log(123);
  var timNV = getEle("searchName").value;
  var mangTimKiem = dsnv.timkiemNV(timNV);
  renderTable(mangTimKiem);
});
