function PersonName(name, age) {
  this.name = name;
  this.age = age;
}

var geuni = new PersonName("근휘", 31);
console.log(geuni);

class Person {
  // 클래스 로직
  constructor(name, age) {
    console.log("생성되었습니다.");
    this.name = name;
    this.age = age;
  }
}

var keun = new Person("근휘", 31); // 생성되었습니다.
console.log(keun);
