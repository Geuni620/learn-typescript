// function logText(text) {
//   console.log(text);
//   return text;
// }

// logText(10); // number 10
// logText("hi"); // string hi
// logText(true); // boolean treu

// function logText<T>(text: T): T {
//   console.log(text);
//   return text;
// }

// logText<string>("하이");

// function logText(text: string) {
//   console.log(text);
//   // text.split("").reverse().join("");
//   return text;
// }

// function logNumber(num: number) {
//   console.log(num);
//   return num;
// }

// function logText(text: string | number) {
//   console.log(text);
//   return text;
// }

// const a = logText("a");
// a.split("");
// logText(10);

function logText<T>(text: T): T {
  console.log(text);
  return text;
}

const str = logText<string>("abc");
str.split("");

const login = logText<boolean>(true);

// interface에 제네릭을 선언하는 방법
// const obj: DropDown = {
//   value: "ABC",
//   selected: true,
// };

// interface DropDown {
//   value: string;
//   selected: boolean;
// }

interface DropDownGeneics<T> {
  value: T;
  selected: boolean;
}

const obj: DropDownGeneics<number> = {
  value: 10,
  selected: true,
};

// 제네릭의 타입제한
// function logTextLength<T>(text: T[]): T[] {
//   console.log(text.length);
//   text.forEach((text) => {
//     console.log(text);
//   });
//   return text;
// }

// logTextLength<string>(["hi", "abc"]);
// "abc".length;

// 제네릭의 타입제한 2 - 정의된 타입 이용하기
interface LengthType {
  length: number;
}

function logTextLength<T extends LengthType>(text: T): T {
  text.length;
  return text;
}

// logTextLength(10);
logTextLength({length: 10});

// 제네릭의 타입제한 3 - keyof를 사용하기
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}

// getShoppingItemOption에 인자로 Shopping 요소들 중 하나만 설정할 수 있음.
// function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
//   return itemOption;
// }

// getShoppingItemOption("name");

// function getProperty<T, O extends keyof T>(obj: T, key: O) {
//   return obj[key];
// }
// let obj = {a: 1, b: 2, c: 3};

// getProperty(obj, "a"); // okay
// getProperty(obj, "z"); // error: "z"는 "a", "b", "c" 속성에 해당하지 않습니다.
