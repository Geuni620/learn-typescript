// interface Person {
//   name: string;
//   age: number;
// }

type Person = {
  name: string;
  age: number;
};

var seho: Person = {
  name: "seho",
  age: 31,
};

type MyString = string;
var str: MyString = "hello";

type Todo = { id: string; title: string; done: boolean };

// id: string title: string done: boolean과 같이 엄청 긴 타입지정을 Todo로 정리할 수 있음.
// 가독성 훨씬 좋아짐!
function getTodo(todo: Todo) {}

// interface를 사용하자 type은 확장이 불가능하지만 interface는 확장이 가능함!
