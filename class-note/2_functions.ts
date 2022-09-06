// // 파라미터의 타입을 정의하는 방식
// // function sum(a: number, b: number) {
// //   return a + b;
// // }
// // sum(10, 20);

// // 반환값의 타입을 정의할 수 있음.
// // function add(): number {
// //   return 10;
// // }

// // 함수의 타입을 정의하는 방식
// function sum(a: number, b: number): number {
//   return a + b;
// }

// // 타입스크립트 같은 경우 30 ~ 50까지는 불필요한 인자라고 인지시켜줌.
// console.log(sum(10, 20));

// // 함수의 선택적 파라미터, 옵셔널파라미터
// // 추가적으로 들어올 수 있는 파라미터 같은 경우에는 "?" 물음표 연산자를 사용하면 됨
// function log(a: string, b?: number, c?: number) {
//   console.log("hi");
// }

// log("hello world", 2, 3);
// log("a", 1, 2);
