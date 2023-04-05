class Student {
    constructor(id, first_name, last_name, class_id, email, phone_number, dob) {
      this.id = id;
      this.first_name = first_name;
      this.last_name = last_name;
      this.class_id = class_id;
      this.email = email;
      this.phone_number = phone_number;
      this.dob = dob;
    }
  
    get_full_name() {
      return `${this.last_name} ${this.first_name}`;
    }
  
    get_age() {
      const today = new Date();
      const birthDate = new Date(this.dob);
      let age = today.getFullYear() - birthDate.getFullYear();
      const month = today.getMonth() - birthDate.getMonth();
      if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return age;
    }
  }
  
  const students = [
    new Student(
      1,
      "Nguyễn",
      "Minh Tiển",
      1,
      "nguyenminhtien@gmail.com",
      "0377212444",
      new Date(2004, 12, 27)
    ),
    new Student(
      2,
      "Lê",
      "Thị Lệ",
      1,
      "lethile@gmail.com",
      "0364716718",
      new Date(2001, 10, 23)
    ),
    new Student(
      3,
      "Trần",
      "Văn Bình",
      2,
      "tranvanbinh@gmail.com",
      "0983377212444",
      new Date(2005, 5, 12)
    ),
    new Student(
      4,
      "Phan",
      "văn Đức",
      2,
      "phanvanduc@gmail.com",
      "0987612342",
      new Date(2001, 12, 4)
    ),
    new Student(
      5,
      "Hoàng",
      "Văn Thái",
      3,
      "hoangvanthai@gmail.com",
      "0989212092",
      new Date(2002, 7, 2)
    ),
  ];
  
  students.sort((a, b) => a.get_age() - b.get_age());
  for (const student of students) {
    console.log(
      `ID: ${
        student.id
      }, Full name: ${student.get_full_name()}, Age: ${student.get_age()} years old, Email: ${
        student.email
      }, Phone number: ${student.phone_number}`
    );
  }
  console.log(`Width: ${window.innerWidth}, Height: ${window.innerHeight}`);
  