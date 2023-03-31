let hoTen = prompt("Nhap ho va ten: ");
let gioiTinh = prompt("Nhap gioi tinh: ");

// Tách họ, tên đệm và tên riêng
let hoTenArr = hoTen.trim().split("");
let ho = hoTenArr[0];
let tenDem = hoTenArr.slice(1, -1).join(" ");
let ten = hoTenArr[hoTenArr.length - 1];

// Thay đổi tên đệm
if(gioiTinh.toLowerCase() === "nam") {
    tenDem = "Văn";
} else if (gioiTinh.toLowerCase() === "nữ"){
    tenDem = "Vẽ";
}
// In ra kêt quả
document.write("Họ: ${ho}");
document.write("Tên Đệm: ${tenDem}");
document.write("Tên: ${ten}");

let tenMoi = ("${ho} ${tenDem} ${ten}");
document.write("Tên mới: ${tenMoi}");