/* Bai 1 : tinh tien luong nhan vien
- Input :
        + luong 1 ngay 
        + so ngay lam
- Xu li :
        + luong 1 ngay * so ngay lam
- Output :
        + In ket qua tong */
        var luong = 100000;
        var soNgaylam = null;
        var tinhLuong = luong * soNgaylam;
        console.log(tinhLuong);
        
        /* Bai 2 : Tinh gia tri trung binh
        - Input : 
                + nhap vao 5 so thuc a = ?, b = ?, c = ?, d = ?, e =?.
        - Xu li :
                + tong cua 5 so thuc = a + b + c + d + e
                + tong cua 5 so thuc chia cho 5
        - Output :
                + In ket qua gia tri trung binh */
        var a = 1;
        var b = 2;
        var c = 3;
        var d = 4;
        var e = 5;
        var tong = a + b + c + d + e;
        var giaTriTrungbinh = tong / 5;
        console.log(giaTriTrungbinh);
        
        /* Bai 3 : Quy Doi Tien
        - Input :
                + nhap usd = null;
                + nhap vnd = 23500;
        - Xu li :
                + quy doi = usd * vnd
        - Output :
                + In ket qua tien sau quy doi */
        var usd = null;
        var vnd = 23500;
        var quyDoi = usd * vnd + " VND";
        console.log(quyDoi);
        
        /* Bai 4 : Tinh dien tich, chu vi hinh chu nhat 
        - Input : 
                + nhap chieu dai
                + nhap chieu rong
        - Xu li :
                + dientich = chieu dai * chieu rong
                + chu vi = (chieu dai + chieu rong) * 2
        - Output :
                + In ket qua dien tich, chu vi.*/
        var chieuDai = 4;
        var chieuRong = 2;
        var dienTich = "Dien tich HCN = " + chieuDai * chieuRong;
        console.log(dienTich);
        var chuVi = "Chu vi HCN = " + (chieuDai + chieuRong) * 2;
        console.log(chuVi);
        
        /* Bai 5 : Tinh tong 2 ky so
        - Input : 
                + nhap so co 2 chu so
        - Xu li :
                + lay so hang don vi 
                + lay so hang chuc
                + lay tong cua so hang don vi va so hang chuc
        - Output :
                + In ket qua tong */
        
        var number = 30;
        var unit = number % 10;
        var ten = number / 10;
        var tong = unit + ten;
        console.log(tong);