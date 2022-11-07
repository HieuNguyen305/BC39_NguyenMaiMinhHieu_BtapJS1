/**
 * TO-DO-LIST
 * 1/ Làm lại bài tập số 4
 */
var listNumBer = [];
function submitTS() {
  var infoNumber = document.getElementById("infoNumber").value * 1;
  listNumBer.push(infoNumber);
  document.getElementById("info").innerHTML = listNumBer;
}

// Bài 1 : Tổng số dương
function submitTSD() {
  var tong = 0;
  for (var i = 0; i < listNumBer.length; i++) {
    tong += listNumBer[i];
  }
  var result = "Tổng số dương là: " + tong;
  document.getElementById("info1").innerHTML = result;
}
submitTSD();

// Bài 2 : Đếm số dương
function submitDSD() {
  var count = 0;
  for (var i = 0; i < listNumBer.length; i++) {
    if (listNumBer[i] > 0) {
      count++;
    }
  }
  var content = "Có: " + count + " số dương";
  document.getElementById("info2").innerHTML = content;
}

// Bài 3 : Tìm số nhỏ nhất
document.getElementById("timSNN").onclick = function () {
  var min = 0;
  for (var i = 0; i < listNumBer.length - 1; i++) {
    for (var j = i + 1; j < listNumBer.length; j++) {
      if (listNumBer[i] > listNumBer[j]) {
        var temp = listNumBer[i];
        listNumBer[i] = listNumBer[j];
        listNumBer[j] = temp;
      }
    }
  }
  min = listNumBer[0];
  var content = "Số nhỏ nhất là: " + min;
  document.getElementById("info3").innerHTML = content;
};

// Bài 4 : Tìm số dương nhỏ nhất
function submitSDNN() {
  if (listNumBer.length === 0) {
    alert("Vui lòng nhập số");
    return;
  }
  var content = "";
  var min = 0;
  {
    for (var i = 0; i < listNumBer.length; i++) {
      if (listNumBer[i] > 0) {
        min = listNumBer[i];
        content = "Số dương nhỏ nhất: " + min;
        break;
      }
    }
    for (var i = 0; i < listNumBer.length; i++) {
      if (listNumBer[i] > 0 && listNumBer[i] < min) {
        min = listNumBer[i];
        content = "Số dương nhỏ nhất: " + min;
      } else {
        content = "Không có số dương trong mảng";
      }
    }
    document.getElementById("info4").innerHTML = content;
    return min;
  }
}

// Bài 5 : Tìm số chẵn cuối cùng
document.getElementById("timSoChan").onclick = function () {
  var result = "";
  for (var i = 0; i < listNumBer.length; i++) {
    var soChan = listNumBer[i];
    if (soChan % 2 === 0) {
      result = "Số chẵn cuối cùng: " + soChan;
      soChan++;
    } else {
      result = "Không có số chẵn nào trong mảng";
    }
    document.getElementById("info5").innerHTML = result;
  }
};

// Bài 7 :  Sắp Xếp Tăng Dần
document.getElementById("sapXepTangDan").onclick = function () {
  for (var i = 0; i < listNumBer.length - 1; i++) {
    for (var j = i + 1; j < listNumBer.length; j++) {
      if (listNumBer[i] > listNumBer[j]) {
        var temp = listNumBer[i];
        listNumBer[i] = listNumBer[j];
        listNumBer[j] = temp;
      }
    }
  }
  var content = "Sắp xếp tăng dần: " + listNumBer;
  document.getElementById("info7").innerHTML = content;
};
