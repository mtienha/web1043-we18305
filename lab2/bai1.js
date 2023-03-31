// enter a, b, c
let a = prompt("Nhap a : ");
let b = prompt("Nhap b : ");
let c = prompt("Nhap c : ");

let delta = b * b - 4 * a * c;

if (a == 0) {
    // b x + c = 0
}else {
    let delta = Math.pow(b, 2) - 4 * a * c;

    if (delta == 0) {
        const x = -b / (2 * a);

        document.writeln("<br> Phuong trinh co nghiem kep: x= ${x}");
    }else if (delta < 0){
        document.writeln("<br> Phuong trinh vo nghiem");
    }else {
        document.writeln("<br> Phuong trinh co 2 nghiem phan biet");
        const x1 = (-b + Math.sqrt(delta)) / (2 * a);
        const x2 = (-b - Math.sqrt(delta)) / (2 * a);
        
        document.writeln("<br> Nghiem x1 = ${x1}");
        document.writeln("<br> Nghiem x2 = ${x2}");
    }
}