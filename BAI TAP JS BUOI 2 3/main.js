/* Bai 1 : tinh tien luong nhan vien
- Input :
        + luong 1 ngay 
        + so ngay lam
- Xu li :
        + luong 1 ngay * so ngay lam
- Output :
        + In ket qua tong */
// var luong = 100000;
// var soNgaylam = null;
// var tinhLuong = luong * soNgaylam;
document.getElementById("btnTinhLuong").onclick = function () {
  // Input
  var ngayLuong = document.getElementById("number-1").value * 1;
  var soNgayLam = document.getElementById("number-2").value * 1;
  // luong 1 ngay * so ngay lam
  var tinhLuong = ngayLuong * soNgayLam;
  // Format number
  var currentFormat = Intl.NumberFormat("VN-vn");
  var result = "Lương tháng này: " + currentFormat.format(tinhLuong) + " VND";
  // Output
  document.getElementById("divInfo").innerHTML = result;
};

/* Bai 2 : Tinh gia tri trung binh
        - Input : 
                + nhap vao 5 so thuc a = ?, b = ?, c = ?, d = ?, e =?.
        - Xu li :
                + tong cua 5 so thuc = a + b + c + d + e
                + tong cua 5 so thuc chia cho 5
        - Output :
                + In ket qua gia tri trung binh */
// var a = 1;
// var b = 2;
// var c = 3;
// var d = 4;
// var e = 5;
// var tong = a + b + c + d + e;
// var giaTriTrungbinh = tong / 5;
// console.log(giaTriTrungbinh);
document.getElementById("btnTinhTrungBinh").onclick = function () {
  // Input
  var number1 = document.getElementById("number1").value * 1;
  var number2 = document.getElementById("number2").value * 1;
  var number3 = document.getElementById("number3").value * 1;
  var number4 = document.getElementById("number4").value * 1;
  var number5 = document.getElementById("number5").value * 1;
  // Gia tri trung binh cua 5 so vua nhap
  var giaTriTrungbinh = (number1 + number2 + number3 + number4 + number5) / 5;
  var rs = "Gia tri trung binh: " + giaTriTrungbinh;
  // Output
  document.getElementById("divInfo1").innerHTML = rs;
};

/* Bai 3 : Quy Doi Tien
        - Input :
                + nhap usd = null;
                + nhap vnd = 23500;
        - Xu li :
                + quy doi = usd * vnd
        - Output :
                + In ket qua tien sau quy doi */
// var usd = null;
// var vnd = 23500;
// var quyDoi = usd * vnd + " VND";
// console.log(quyDoi);
document.getElementById("quyDoiTien").onclick = function () {
  // input
  var USD = document.getElementById("numberUSD").value * 1;
  // quy doi dong usd
  var doiTien = USD * 23500;
  var currentFormatVND = Intl.NumberFormat("VN-vn");
  var rsUSD = currentFormatVND.format(doiTien) + " VND";
  // Output
  document.getElementById("divInfo2").innerHTML = rsUSD;
};

/* Bai 4 : Tinh dien tich, chu vi hinh chu nhat 
        - Input : 
                + nhap chieu dai
                + nhap chieu rong
        - Xu li :
                + dientich = chieu dai * chieu rong
                + chu vi = (chieu dai + chieu rong) * 2
        - Output :
                + In ket qua dien tich, chu vi.*/
// var chieuDai = 4;
// var chieuRong = 2;
// var dienTich = "Dien tich HCN = " + chieuDai * chieuRong;
// console.log(dienTich);
// var chuVi = "Chu vi HCN = " + (chieuDai + chieuRong) * 2;
// console.log(chuVi);
document.getElementById("dienTich_chuVI").onclick = function () {
  // input
  var chieuDai = document.getElementById("chieuDai").value * 1;
  var chieuRong = document.getElementById("chieuRong").value * 1;
  // Tinh dien tich, chu vi
  var dienTich = chieuDai * chieuRong;
  var chuVi = (chieuDai + chieuRong) * 2;
  var rs2 = "";
  rs2 += "Dien Tich: " + dienTich;
  rs2 += "<br>";
  rs2 += "Chu vi: " + chuVi;
  // Output
  document.getElementById("divInfo3").innerHTML = rs2;
};

/* Bai 5 : Tinh tong 2 ky so
        - Input : 
                + nhap so co 2 chu so
        - Xu li :
                + lay so hang don vi 
                + lay so hang chuc
                + lay tong cua so hang don vi va so hang chuc
        - Output :
                + In ket qua tong */

// var number = 30;
// var unit = number % 10;
// var ten = number / 10;
// var tong = unit + ten;
// console.log(tong);
document.getElementById("tinhTong").onclick = function () {
  // input
  var nhapSo = document.getElementById("nhapSo").value * 1;
  // Xu li
  // lay so hang don vi
  var so_hang_dv = nhapSo % 10 ;
  var so_hang_chuc = Math.floor(nhapSo / 10);
  var tongHaiSo = so_hang_dv + so_hang_chuc;
  // Output
  document.getElementById("divInfo4").innerHTML = tongHaiSo;
};
