class SchoolDetails {
  constructor() {
    this.SchoolName = "J.E. School";
    this.Location = "Muktainagar";
    this.SchoolRating = "3.5";
  }
  ShowSchoolInfo() {}
}
class studentWithDistinction extends SchoolDetails {
  constructor() {
    super();
    this.sname = "Vedant";
    this.sage = 28;
  }
  ShowInfo() {
    console.log(`Student Name is ${this.sname}`);
    console.log(`Student Age is ${this.sage}`);
    console.log(`School Name is ${this.SchoolName}`);
    console.log(`School Location is ${this.Location}`);
  }
}
class studentWithFirstClass extends studentWithDistinction{ 
  constructor() {
    super();
    this.ProjectName = "UI Project";
    this.ProjectMarks = 70;
    this.sname = "Divyani";
    this.sage = 26;
  }
  ShowInfo() {
    console.log(`Student Name is ${this.sname}`);
    console.log(`Student Age is ${this.sage}`);
    console.log(`School Name is ${this.SchoolName}`);
    console.log(`School Location is ${this.Location}`);
    console.log(`Project Name is ${this.ProjectName}`);
    console.log(`Project Marks is ${this.ProjectMarks}`);
  }
  // ShowInfo() {}
}
var s1 = new studentWithFirstClass();
s1.ShowInfo();