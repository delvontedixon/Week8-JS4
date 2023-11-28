class Student {
  constructor(firstName, lastName, phoneNumber, grade) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.grade = grade;
  }

  introduce() {
    console.log(
      `${this.firstName} ${this.lastName} can be reached at ${this.phoneNumber}`
    );
  }
}

let student1 = new Student("Del", "Dixon", "8507777777", "B");
let student2 = new Student("Kelsy", "Leppo", "8508888888", "A");

student1.introduce();
student2.introduce();
