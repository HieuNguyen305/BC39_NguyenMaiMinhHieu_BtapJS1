// bai tap 1 : Xuat 3 so theo thu tu tang dan
/**
 * Mo hinh 3 khoi
 * input : nhập vào 3 số nguyên
 * xu li : So sanh 3 so
 * output : Xuất ra kết quả 3 số theo thứ tự tăng dần
 */
document.getElementById("sapXep").onclick = function () {
  // input info user
  var number1 = document.getElementById("number1").value * 1;
  var number2 = document.getElementById("number2").value * 1;
  var number3 = document.getElementById("number3").value * 1;
  var min = "";
  var avg = "";
  var max = "";
  var result = "";
  // xu li
  if (number1 > number2) {
    if (number2 > number3) {
      max = number1;
      avg = number2;
      min = number3;
    } else if (number1 > number3) {
      max = number1;
      avg = number3;
      min = number2;
    } else {
      max = number3;
      avg = number1;
      min = number2;
    }
  } else {
    if (number2 < number3) {
      max = number3;
      avg = number2;
      min = number1;
    } else if (number1 < number3) {
      max = number2;
      avg = number3;
      min = number1;
    } else {
      max = number2;
      avg = number1;
      min = number3;
    }
  }
  // output
  result = min + " " + avg + " " + max;
  document.getElementById("divInfo").innerHTML = result;
};

// bai tap 2 : chuong trinh chao hoi
/**
 * Mo hinh 3 khoi
 * input : nhap vao 4 thanh vien trong gia dinh
 * xu li : Kiem tra xem ai dang su dung may de thuc hien loi chao
 * output : xuat ra ket qua loi chao cua nguoi dang su dung may
 */
document.getElementById("btn_chon").onclick = function () {
  //input user
  var nguoisd = document.getElementById("who").value * 1;
  var content = "";
  //xu li
  switch (nguoisd) {
    case 1:
      content = "Xin chào Bố!";
      break;
    case 2:
      content = "Xin chào Mẹ!";
      break;
    case 3:
      content = "Xin chào Anh Trai!";
      break;
    case 4:
      content = "Xin chào Em Gái!";
      break;
  }
  // output
  document.getElementById("chao").innerHTML = content;
};

// bai tap 3 : Đếm số chẵn lẻ
/**
 * Mo hinh 3 khoi
 * input : nhap vao 3 so
 * xu li : kiểm tra 1 số là chẵn hay lẻ thì ta đem số đó chia với 2
 * output : xuat ra ket qua bao nhieu so chan, so le.
 */
document.getElementById("dem").onclick = function () {
  //input
  var soThu1 = document.getElementById("number4").value * 1;
  var soThu2 = document.getElementById("number5").value * 1;
  var soThu3 = document.getElementById("number6").value * 1;
  var sochan = 0;
  var sole = 0;
  var phanloai = "";
  //xu li
  soThu1 % 2 == 0 ? (sochan = sochan + 1) : (sole = sole + 1);
  soThu2 % 2 == 0 ? (sochan = sochan + 1) : (sole = sole + 1);
  soThu3 % 2 == 0 ? (sochan = sochan + 1) : (sole = sole + 1);
  phanloai = "có " + sochan + " số chẳn và " + sole + " số lẻ";
  //output
  document.getElementById("info").innerHTML = phanloai;
};

// bai tap 4 : Doan hinh tam giac
/**
 * Mo hinh 3 khoi
 * input : nhap vao 3 canh
 * xu li : Xac dinh 3 canh de biet la tam giac gi ?
 * output : xuat ra ket qua hinh tam giac
 */
document.getElementById("duDoan").onclick = function () {
  //input
  var canh1 = document.getElementById("canh1").value * 1;
  var canh2 = document.getElementById("canh2").value * 1;
  var canh3 = document.getElementById("canh3").value * 1;
  var tamgiac = "";
  //xu li
  if (canh1 + canh2 > canh3 && canh1 + canh3 > canh2 && canh3 + canh2 > canh1) {
    if (canh1 == canh2 && canh1 == canh3 && canh2 == canh3) {
      tamgiac = "tam giác đều";
    } else if (canh1 == canh2 || canh1 == canh3 || canh2 == canh3) {
      tamgiac = "tam giác cân";
    } else if (
      canh1 * canh1 + canh2 * canh2 == canh3 * canh3 ||
      canh1 * canh1 + canh3 * canh3 == canh2 * canh2 ||
      canh2 * canh2 + canh3 * canh3 == canh1 * canh1
    ) {
      tamgiac = "tam giác vuông";
    } else {
      tamgiac = "tam giác thường";
    }
  } else {
    tamgiac = "nhập sai";
  }
  // output
  document.getElementById("infoCanh").innerHTML = tamgiac;
};
