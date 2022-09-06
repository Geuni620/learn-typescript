// // 인터페이스
// interface Developer {
//   name: string;
//   skill: string;
// }

// interface Person {
//   name: string;
// }

// var developer: Developer;
// var person: Person;

// // person의 속성은 name밖에 없는데,
// // Developer은 name과 skill 둘다 가지고 있음.
// // 이런경우 오른쪽의 변수가 왼쪽에 할당될 수 없음.

// person = developer; // 호환가능
// developer = person; // 호환불가능
// // 즉 오른쪽의 변수가 더 많은 속성을 가지고 있어야함.

// // 함수
// var add = function (a: number) {
//   // ...
// };

// var sum = function (a: number, b: number) {
//   // ...
// };

// // sum = add;

// sum = add; // 호환가능
// add = sum; // 호환불가능

// interface Empty<T> {
//   // ...
// }

// var empty1: Empty<string>;
// var empty2: Empty<number>;

// empty1 = empty2; // 호환가능, interface안에 지정된 제네릭이 없음

// interface NotEmpty<T> {
//   data: T;
// }

// var notempty1: NotEmpty<string>;
// var notempty2: NotEmpty<number>;

// notempty1 = notempty2; // 호환불가능, number !== string

// // 함수내부적으로 더 많은 타입을 가지고 있는게 그 함수가 구조적으로 크고 넓은 범위
// //
