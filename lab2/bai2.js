// enter a, b, c
let a = prompt("Nhap a : ");
let b = prompt("Nhap b : ");
let c = prompt("Nhap c : ");

// kiem tra xem a, b, c co phai la 3 canh cua mot tam giachay khong?
if( a+ b > c && a + c > b && b + c > a){
    // tinh dien tich tam giac bang cong thuc Heron
    let p = (a + b +c) / 2; // nua chu vi hinh tam giac
    let S = Math.sqrt(p * (p - a) * (p - b) * (p - c));

    // kiem tra loai tam giac 
    if(a === b && b === c){
        document.write("tam giac deu");
    } else if (a === b || b === c || c === a) {
        document.write("tam giac can");
    } else if (Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2) ||
              Math.pow(a, 2) + Math.pow(c, 2) === Math.pow(b, 2) ||
              Math.pow(b, 2) + Math.pow(c, 2) === Math.pow(a, 2)){
        document.write("tam giac vuong");
    }else {
        document.write("tam giac thuong");
    }
}else{
    document.write("ba gia tri nhap vao khong phai la 3 canh cua mot tam giac");
}
