interface User {
  age: number;
  name: string;
}

// 변수에 활용한 인터페이스
var seho: User = {
  age: 33,
  name: "seho",
};

// 함수에 활용한 인터페이스
function getuser(user: User) {
  console.log(user);
}
const capt = {
  name: "캡틴",
  age: 31,
};

getuser(capt);

// 함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction {
  (a: number, b: number): number;
}

var sum: SumFunction;
sum = function (a: number, b: number): number {
  return a + b;
};

// 인덱싱
interface StringArray {
  [index: number]: string;
}

var ar: StringArray = ["a", "b", "c"];
// arr[0] = 10; // 'a'

// 딕셔너리 패턴
interface StringRegexDictionary {
  [key: string]: RegExp; // 정규표현식
}

var obj: StringRegexDictionary = {
  //   sth: /abc/,

  cssFile: /\.css$/,
  jsFile: /\.js$/,
};

//obj["cssFile"] = "a";
//object.keys(obj).foreach(function (value) {});

//interface 확장
// interface Person {
//   name: string;
//   age: number;
// }

interface Developer extends Person {
  language: string;
}

var captain: Developer = {
  language: "ts",
  age: 100,
  name: `캡틴`,
};
