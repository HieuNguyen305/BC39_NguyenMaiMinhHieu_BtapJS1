// Bài tập số 1
var result = 0;
function soNguyenDuong() {
  var s = 0;
  var n = 0;
  while (s < 10000) {
    n++;
    s += n;
  }
  result = n;
}
soNguyenDuong();
function submitKQ() {
  document.getElementById("infoKQ").innerHTML =
    "số nguyên dương nhỏ nhất là: " + result;
}
/**
 * n = 0 thì s = 0
 * n = 1 thì s = 1
 * n = 2 thì s = 3
 * n = 3 thì s = 6
 * n = 4 thì s = 10
 * n = 5 thì s = 15
 *  */

// Bài tập số 2
var ketQua = 0;
function tinhTong(x, n) {
  var l = 1;
  var s = 0;
  // nhập giá trị x,n
  for (var i = 1; i <= n; i++) {
    l *= x;
    s += l;
  }
  return (ketQua = s);
}
tinhTong();

function submitTT() {
  var soX = document.getElementById("soX").value * 1;
  var soN = document.getElementById("soN").value * 1;
  var tong = tinhTong(soX, soN);
  document.getElementById("infoKQL").innerHTML = "Tổng: " + tong;
}

//Bài tập số 3
function factorial(a) {
  if (a === 0) {
    return 1;
  } else {
    return a * factorial(a - 1);
  }
}
function submitGT() {
  var nhapSO = document.getElementById("nhapSo").value * 1;
  var giaiThua = factorial(nhapSO);
  document.getElementById("infoGT").innerHTML =
    "Giai thừa của " + nhapSO + " là " + giaiThua;
}

// bài tập số 4
var theDIV = "";
function taoTheDiv() {
  var content = document.getElementsByTagName("div");
  //
  for (var i = 0; i < 10; i++) {
    if (i % 2 === 0) {
      theDIV +=
        "<div class='bg-danger text-white py-2'>" + "div chẵn" + "</div>";
      // content.style.background = "red";
      theDIV += "\n";
    } else {
      theDIV +=
        "<div class='bg-primary text-white py-2'>" + "div lẻ" + "</div>";
      theDIV += "\n";
    }
  }
}
taoTheDiv();
function submitTheDiv() {
  document.getElementById("infoDIV").innerHTML = theDIV;
}

//bài tập số 5
var flag = true;
function kiemTraSNT(n) {
  if (n < 2) {
    flag = false;
  } else if (n === 2) {
    flag = true;
  } else if (n % 2 === 0) {
    flag = false;
  } else {
    //lặp từ 3 tới n-1 với bước nhảy là 2 (i+=2)
    for (var i = 3; i <= Math.sqrt(n); i += 2) {
      if (n % i === 0) {
        flag = false;
        break;
      }
    }
  }
  return flag;
}
kiemTraSNT();

function submitInSo() {
  var number = document.getElementById("nhapSoN").value * 1;
  // var soNguyenTo = kiemTraSNT(number);
  var content = "";
  for (var i = 1; i <= number; i++) {
    if (kiemTraSNT(i)) {
      content += i + " ";
    }
  }
  document.getElementById("infoinSo").innerHTML = content;
}
