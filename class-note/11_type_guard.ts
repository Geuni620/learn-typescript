// interface Developer {
//   name: string;
//   skill: string;
// }

// interface Person {
//   name: string;
//   age: number;
// }

// function Introduce(): Developer | Person {
//   return {name: "KeunHwee", age: 31, skill: "Iron Making"};
// }

// var tony = Introduce();
// // console.log(tony.skill); // Error 발생

// //타입가드 정의
// function isDeveloper(target: Developer | Person): target is Developer {
//   return (target as Developer).skill !== undefined;
// }

// if (isDeveloper(tony)) {
//   tony.skill;
// } else {
//   tony.age;
// }
