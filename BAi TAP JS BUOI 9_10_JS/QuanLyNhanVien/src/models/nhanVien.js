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
    if (this.chucVu === "Giam Doc") {
      this.tongLuong = parsefloat(this.luongCoBan * 3);
    } else if (this.chucVu === "Truong phong") {
      this.tongLuong = parsefloat(this.luongCoBan * 2);
    } else this.tongLuong = parsefloat(this.luongCoBan);
  };

  this.xeploaiNhanVien = function () {
    
  };
}
