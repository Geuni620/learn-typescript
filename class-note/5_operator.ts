// // function logMessage(value: any) {
// //   console.log(value);
// // }

// // logMessage("hi");
// // logMessage(100);

// // 유니온타입, 하나이상의 타입을 지정할 때 사용함
// var geuni: string | number | boolean;
// function logMessage(value: string | number) {
//   // 유니온타입을 지정한 후 typeof를 통해서 타입이 number인 경우 console.log(value 여기선 number 타입으로 사용 됨 )
//   if (typeof value === "number") {
//     console.log(value.toLocaleString());
//   }

//   if (typeof value === "string") {
//     console.log(value.toString());
//   }

//   throw new TypeError("value must be string or number");
// }

// logMessage("hi");
// logMessage(100);

// interface Developer {
//   name: string;
//   skill: string;
// }

// interface Person {
//   name: string;
//   age: number;
// }

// // function askSomeone(someone: Developer | Person) {
// //   // 두 개의 인터페이스를 지정해놨을 때 두개의 인터페이스 안에 모든 타입종류를 사용할 수 있는게 아니라, 공통된 타입(name)만 사용할 수 있음
// //   someone.name;
// //   someone.skill;
// //   someone.age;
// // }
// // askSomeone({name: "디벨로퍼", skill: "웹 개발"});
// // askSomeone({name: "캡틴", age: 31}); // 실무에선 이런 식으로 쓰임, 그리고 유니온이 더 많이 쓰임!!!

// // & 연산자에 대해서 배워보자
// // function askSomeone(someone: Developer & Person) {
// //   // & 연산자로 묶어주니, 위의 유니온과 다르게 에러표시가 사라짐
// //   // 여기서 설명은 Developer과 Person이 가지고 있는 3개의 type을 모두 포함하는 타입이 someone으로 지정된 형태임. 즉, 위에 유니온은 교집합, 인터넥션은 합집합
// //   // 실무에선 유니온타입이 더 많이 쓰이게 될 것
// //   someone.name;
// //   someone.skill;
// //   someone.age;
// // }

// // askSomeone({name: "디벨로퍼", skill: "웹 개발", age: 31});
// // askSomeone({name: "캡틴", age: 31}); // skil에 대한 속성도 필요하다고 에러가 뜸!!!

// // // var seho: string | number | boolean;
// // // stringdㅣ면서 number면서 boolean을 만족하는 하나의 타입을 intersection이라고 함
// // // var capt: string & number & boolean;
