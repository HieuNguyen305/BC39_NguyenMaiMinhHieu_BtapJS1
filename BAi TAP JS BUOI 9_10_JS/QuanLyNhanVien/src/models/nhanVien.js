function NhanVien(
  _taiKhoan,
  _hoTen,
  _email,
  _matKhau,
  _ngayLam,
  _luongCoBan,
  _chucVu,
  _gioLam
) {
  //property
  this.taiKhoan = _taiKhoan;
  this.hoTen = _hoTen;
  this.email = _email;
  this.matKhau = _matKhau;
  this.ngayLam = _ngayLam;
  this.luongCoBan = _luongCoBan;
  this.chucVu = _chucVu;
  this.gioLam = _gioLam;
  this.tongLuong = 0;
  this.loaiNhanVien = "";
  //method
  this.tinhLuong = function () {
    if (this.chucVu === "Sếp") {
      this.tongLuong = parseFloat(this.luongCoBan * 3);
    } else if (this.chucVu === "Trưởng phòng") {
      this.tongLuong = parseFloat(this.luongCoBan * 2);
    } else this.tongLuong = parseFloat(this.luongCoBan);
  };

  this.xeploaiNhanVien = function () {
    if (this.gioLam >= 192) {
      this.loaiNhanVien = "Xuất sắc";
    } else if (this.gioLam >= 176) {
      this.loaiNhanVien = "Giỏi";
    } else if (this.gioLam >= 160) {
      this.loaiNhanVien = "Khá";
    } else this.loaiNhanVien = "Trung bình";
  };
}
