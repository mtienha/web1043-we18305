function calculateDTB() {
    let toán = parseFloat(prompt("Nhập điểm môn Toán:"));
    let lý = parseFloat(prompt("Nhập điểm môn Lý:"));
    let hóa = parseFloat(prompt("Nhập điểm môn Hóa:"));
    let sinh = parseFloat(prompt("Nhập điểm môn Sinh:"));

    // Kiểm tra điều kiện
    if (isNaN(toán) || isNaN(lý) || isNaN(hóa) || isNaN(sinh)) {
        document.write("Vui lòng nhập số");
        return;
    }

    // Kiểm tra điểm từ 0 - 10
    if (toán < 0 || toán > 10 || lý < 0 || lý > 10 || hóa < 0 || hóa > 10 || sinh < 0 || sinh > 10) {
        document.write("Điểm phải 0 đến 10!");
        return;
    }

    let DTB = (toán + lý + hóa + sinh) / 4;
    document.write(`Điểm trung bình của bạn là ${DTB}`);

    // Xuất ra kết quả xếp loại
    if (DTB >= 10 && DTB >= 9) {
        document.write("Xếp loại: Giỏi");
    } else if (9 > DTB && DTB >= 7) {
        document.write("Xếp loại: Khá");
    } else if (DTB <= 7 && DTB >= 5) {
        document.write("Xếp loại: Trung Bình");
    } else {
        document.write("Xếp loại: Yếu");
    }
}


function calculateDTBSwitch() {
    let toán = parseFloat(prompt("Nhập điểm môn Toán:"));
    let lý = parseFloat(prompt("Nhập điểm môn Lý:"));
    let hóa = parseFloat(prompt("Nhập điểm môn Hóa:"));
    let sinh = parseFloat(prompt("Nhập điểm môn Sinh:"));

    // Kiểm tra điều kiện
    if (isNaN(toán) || isNaN(lý) || isNaN(hóa) || isNaN(sinh)) {
        document.write("Vui lòng nhập số");
        return;
    }

    // Kiểm tra điểm từ 0 - 10
    if (toán < 0 || toán > 10 || lý < 0 || lý > 10 || hóa < 0 || hóa > 10 || sinh < 0 || sinh > 10) {
        document.write("Điểm phải nằm trong khoảng từ 0 đến 10!");
        return;
    }

    let DTB = (toán + lý + hóa + sinh) / 4;
    document.write(`Điểm trung bình của bạn là ${DTB}`);

    // Xuất ra kết quả xếp loại
    switch (true) {
        case DTB >= 10 && DTB >= 9:
            document.write("Xếp loại: Giỏi");
            break;
        case DTB < 9 && DTB >= 7:
            document.write("Xếp loại: Khá");
            break;
        case DTB < 7 && DTB >= 5:
document.write("Xếp loại: Trung Bình");
            break;
        default:
            document.write("Xếp loại: Yếu");
            break;
    }
}

function main() {
    while (true) {
        let chọn = parseInt(prompt("Chọn 1 trong các lựa chọn sau:\n1. Tính điểm trung bình (sử dụng if else)\n2. Tính điểm trung bình (sử dụng switch case)\n0. Thoát"));
        switch (chọn) {
            case 1:
                calculateDTB();
                break;
            case 2:
                calculateDTBSwitch();
                break;
            case 0:
                return;
            default:
                document.write("Lựa chọn không hợp lệ!");
                break;
        }
    }
}

main();