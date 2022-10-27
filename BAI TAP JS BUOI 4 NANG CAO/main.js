// bai tap so 5 : Tinh ngay thang nam
/**
 * Mo hinh 3 khoi
 * input : nhap vao ngay thang nam
 * xu li : tim ngay thang nam cua ngay tiep theo va ngay truoc do
 * output : In ket qua cua ngay hom qua va ngay mai
 */
document.getElementById("ngayHomQua").onclick = function () {};
document.getElementById("ngayMai").onclick = function () {
  var ngay = document.getElementById("ngay").value * 1;
  var thang = document.getElementById("thang").value * 1;
  var nam = document.getElementById("nam").value * 1;
  if (ngay >= 1 && ngay <= 31) {
    ngay = console.log(ngay);
  } else {
    ngay = alert("Nhap lai");
  }

  document.getElementById("info").innerHTML = ngay;
};

// Bai Tap So 6 : Cho biết tháng đó có bao nhiêu ngày
/**
 * Mô hình 3 khối
 * input : nhập vào tháng năm
 * xử lí : 
 * output : In ket qua
 */
