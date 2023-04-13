function KiemTra() {
    var name = document.getElementById("name");
    var gender = document.getElementsByName("gender");
    var email = document.getElementById("email");
    var phone = document.getElementById("phone");


    if (name.value.length == 0) {
        name.style.border = "1px solid red";
        error1.innerHTML = "Họ tên không được để trống!";
        return false;
    } else {
        name.style.border = "none";
        error1.innerHTML = "";
    }

    if (gender[0].checked !== true & gender[1].checked !== true) {
        error2.innerHTML = "Bạn phải chọn giới tính!";
        return false;
    } else {
        error2.innerHTML = "";
    }

    if (email.value.length == 0) {
        email.style.border = "1px solid red";
        error3.innerHTML = "Email không được để trống!";
        return false;
    } else {
        email.style.border = "none";
        error3.innerHTML = "";
    }

    if (phone.value.length == 0) {
        phone.style.border = "1px solid red";
        error4.innerHTML = "Số điện thoại không được để trống!";
        return false;
    } else {
        phone.style.border = "none";
        error4.innerHTML = "";
    }

    return alert('Đăng ký thành viên thành công!')
}