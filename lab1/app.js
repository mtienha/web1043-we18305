do {
    var a = parseInt(prompt("Mời bạn nhập số nguyên a: "))

    //Kiểm tra số nhập vào phải là số không được nhập chữ số
    function kiemTra(a) {
        while (isNaN(a) == true) {
            a = parseInt(prompt("Hãy nhập số! Mời bạn nhập lại số nguyên a: "))
        }
        return a
    }
    a = kiemTra(a)
} while (false)

do {
    var b = parseInt(prompt("Mời bạn nhập số nguyên b: "))

    //Kiểm tra số nhập vào phải là số không được nhập chữ số
    function kiemTra(b) {
        while (isNaN(b) == true) {
            b = parseInt(prompt("Hãy nhập số! Mời bạn nhập lại số nguyên b: "))
        }
        return b
    }
    so2 = kiemTra(b)
} while (false)