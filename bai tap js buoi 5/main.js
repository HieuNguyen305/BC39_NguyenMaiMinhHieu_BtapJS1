// bai tap so 1
/**
 * input : diemchuan, diem 3 mon, khu vuc, doi tuong du thi
 * xu li : tinh diem tong ket = 3 mon + diem uu tien va diem doi tuong
 * output : Cho biet thi sinh do dau hay rot va tong diem dat duoc
 */
// const khuVuc = 0;
// const doiTuong = 0;
// const khuVucA = 2;
// const khuVucB = 1;
// const khuVucC = 0.5;
// const doiTuong1 = 2.5;
// const doiTuong2 = 1.5;
// const doiTuong3 = 1;

function submitKQ() {
  // input
  var diemMon1 = document.getElementById("diemMon1").value * 1;
  var diemMon2 = document.getElementById("diemMon2").value * 1;
  var diemMon3 = document.getElementById("diemMon3").value * 1;
  var diemChuan = document.getElementById("diemChuan").value * 1;
  var khuVuc = document.getElementById("khuVuc").value * 1;
  var doiTuong = document.getElementById("doiTuong").value * 1;
  // xu li
  var diemTongKet = diemMon1 + diemMon2 + diemMon3 + khuVuc + doiTuong;
  // Xet diem 3 mon
  if (diemMon1 == 0 || diemMon2 == 0 || diemMon3 == 0) {
      diemChuan = "Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0";
  } else if (diemTongKet >= diemChuan){
    diemChuan = "Bạn đã đậu. Tổng điểm: " + diemTongKet;
  } else
    diemChuan = 'Bạn đã rớt. Tổng điểm: ' + diemTongKet;  
document.getElementById('infoKQ').innerHTML = diemChuan; 
};

// bai tap so 2 : Tinh tien dien
/**
 * mo hinh 3 khoi
 * input : 
 * xu li
 * output 
 */

function submitTD() {
    //input
    var hoTen = document.getElementById('nhapHoTen').value;
    var soKW = document.getElementById('soKW').value * 1;
    // xu li

    // document.getElementById('infoTD').innerHTML = ;
}
