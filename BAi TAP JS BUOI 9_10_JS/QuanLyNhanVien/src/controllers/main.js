// tạo đối tượng dsnv theo kiểu global
var dsnv = new DanhSachNhanVien();
var validation = new Validation();
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

  // Create Flag To Check Validation
  var flag = true;
  //Check tài khoản
  flag =
    validation.kiemTraRong(
      taiKhoan,
      "errorTK",
      "(*) Vui lòng nhập tài khoản"
    ) &&
    validation.kiemTraDoDaiKyTu(
      taiKhoan,
      "errorTK",
      "(*) Vui lòng nhập từ 4-6 kí tự",
      4,
      10
    );
  // check họ tên
  /**
   * &= Meaning :
   * // check họ tên
   * flag &= false
   * // check taiKhoan
   * flag = flag(hoTen) && false(hoTen)
   */
  flag &=
    validation.kiemTraRong(hoTen, "errorName", "(*) Vui lòng nhập họ tên") &&
    validation.kiemTraChuoiKiTu(
      hoTen,
      "errorName",
      "(*) Vui lòng nhập chuỗi kí tự"
    );
  // check email
  flag &=
    validation.kiemTraRong(email, "errorEmail", "(*) Vui lòng nhập Email") &&
    validation.kiemTraEmail(
      email,
      "errorEmail",
      "(*) Vui lòng nhập đúng định dạng Email"
    );
  // check password
  flag &=
    validation.kiemTraRong(matKhau, "errorMK", "(*) Vui lòng nhập mật khẩu") &&
    validation.kiemTraMatKhau(
      matKhau,
      "errorMK",
      "(*) Mật khẩu chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt và 6-10 ký tự",
      6,
      10
    );
  // check ngày làm
  flag &= validation.kiemTraNgayLam(
    ngayLam,
    "errorDate",
    "(*) Vui lòng nhập ngày làm"
  );
  // check lương
  flag &=
    validation.kiemTraRong(
      luongCoBan,
      "errorLuong",
      "(*) Vui lòng nhập mức lương cơ bản"
    ) &&
    validation.kiemTraTienLuong(
      luongCoBan,
      "errorLuong",
      "(*) Mức lương từ 1tr đến 20tr",
      1000000,
      20000000
    );
  // check chức vụ
  flag &= validation.kiemTraChucVu(
    "chucvu",
    "errorChucVu",
    "(*) Vui lòng chọn chức vụ"
  );
  // check giờ làm
  flag &=
    validation.kiemTraRong(
      gioLam,
      "errorTime",
      "(*) Vui lòng nhập vào giờ làm"
    ) &&
    validation.kiemTraSoGioLam(
      gioLam,
      "errorTime",
      "(*) Số giờ làm từ 80-200h",
      80,
      200
    );
  // Check Validation
  if (!flag) return;

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
  if (NV) {
    dsnv.themNV(NV);
    //render danh sach nhan vien da them ra UI
    renderTable(dsnv.arr);
    setLocalStorage();
  }
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
