// ### 1. **전역 스코프와 함수 스코프에 대한 이해**

// var x = 10;

// function example() {
//   console.log(x);
//   var x = 20;
//   console.log(x);
// }

// example();
// 능
// - 출력 결과는 무엇인가요? 그리고 그 이유를 설명하세요.
// Undefined - 자바스크립트의 호이스팅으로 인해 변수가 선언되었지만 할당이 되지 않음.
// 20 - var x 로 변수 선언 및 할당이 됨

// ### 2. **IIFE(즉시 실행 함수) 동작 이해**

// (function () {
//   var a = 5;
//   console.log(a);
// })();

// console.log(a);

// - 위 코드에서 콘솔에 출력되는 값은 무엇이며, 외부에서 `a`에 접근할 수 없는 이유를 설명하세요.
// A : 5, 함수 표현식으로 내부에서 선언된 변수만 접근가능 하다.

// ### 3. **`this` 바인딩 규칙 1: 전역 컨텍스트**

// function showThis() {
//   console.log(this);
// }

// showThis();

// - 위 코드에서 `this`가 가리키는 값은 무엇인가요? (브라우저 환경 기준)
// A : Window

// ### 4. **`this` 바인딩 규칙 2: 메서드 호출**

// const car = {
//   brand: "Toyota",
//   displayBrand() {
//     console.log(this.brand);
//   },
// };

// car.displayBrand();

// - `this`는 무엇을 가리키며, 출력 결과는 무엇인가요?
// A : car 객체, 출력결과는 Toyota

// ### 5. **`call()`을 사용한 명시적 바인딩**

// const person = { name: "Gyejin" };

// function sayHello() {
//   console.log(`Hello, ${this.name}`);
// }

// sayHello.call(person);

// - `call()` 메서드를 사용했을 때 `this`가 가리키는 값과 출력 결과는 무엇인가요?

// A : person객체, 출력 결과는 Hello, Gyejin

// ### 6. **`bind()` 메서드를 활용한 바인딩**

// function greet() {
//   console.log(`Hello, ${this.name}`);
// }

// const person = { name: "Gyejin" };
// const boundGreet = greet.bind(person);

// boundGreet();

// `bind()` 메서드를 사용한 후 함수 `boundGreet()`를 호출했을 때의 출력 결과는 무엇인가요?
// A : 출력 결과는 Hello, Gyejin

// ### 7. **프로토타입 상속**

// function Animal(type) {
//   this.type = type;
// }

// Animal.prototype.speak = function () {
//   console.log(`${this.type} makes a sound.`);
// };

// const dog = new Animal("Dog");

// dog.speak();

// - 프로토타입을 통해 상속된 메서드 `speak()`가 어떤 객체에서 호출되며, 출력 결과는 무엇인가요?
// A : Animal객체, 출력결과는 Dog makes a sound.

// ### 8. **콜 스택과 비동기 함수의 순서**

// console.log("Start");

// setTimeout(() => {
//   console.log("Timeout");
// }, 1000);

// console.log("End");

// - 위 코드를 실행하면 출력 순서는 어떻게 되고, 그 이유는 무엇인가요?
// A : Start -> End -> Timeout / setTimeout 함수는 태스크 큐로 Timeout 값을 1초뒤로 설정했기 때문

// ### 9. **마이크로태스크 큐와 태스크 큐의 차이**

// console.log("Start");

// setTimeout(() => {
//   console.log("Timeout");
// }, 0);

// Promise.resolve().then(() => {
//   console.log("Promise");
// });

// console.log("End");

// - 위 코드에서 출력 순서와 그 이유를 설명하세요.
// A :  Start -> End -> Promise -> Timeout / 태스크큐보다 마이크로태스크큐가 우선순위가 높기 때문에 Promise가 Timeout보다 먼저 출력됨

// ### 10. **Strict 모드에서의 오류 탐지**

// "use strict";

// x = 5;

// console.log(x)음

// - 위 코드에서 발생하는 오류와 그 이유를 설명하세요.
// A : 엄격 모드로 설정되어 전역변수를 허용하지 않음

// ### 11. **클로저를 이용한 상태 유지**

// function createCounter() {
//   let count = 0;

//   return function () {
//     count++;
//     console.log(count);
//   };
// }

// const counter = createCounter();

// counter();
// counter();

// - 클로저를 사용했을 때, `count` 변수의 상태는 어떻게 유지되며, 출력 결과는 무엇인가요?
// A : 함수가 자신의 렉시컬 스코프를 기억하기 때문에 count가 계속 기억됨. 출력결과는 1 2

// ### 12. **화살표 함수에서의 `this` 바인딩**

// const person = {
//   name: "Gyejin",
//   greet: () => {
//     console.log(this.name);
//   },
// }

// person.greet();

// - 화살표 함수 `greet()`에서 `this`가 가리키는 것은 무엇이며, 출력 결과는 무엇인가요?
// A : 전역 변수, Undefined

// ### 13. **`setTimeout`과 `this` 바인딩 문제 해결**

// const user = {
//   name: 'Gyejin',
//   greet() {
//     setTimeout(function() {
//       console.log(this.name);
//     }, 1000);
//   }
// };

// user.greet();

// - 위 코드에서 `this.name`이 제대로 출력되지 않는 이유는 무엇이며, 이를 해결하는 방법을 설명하세요.
// A : this 바인딩 예외 때문에, 이를 해결하기 위해 화살표 함수를 사용하면 된다.

// ### 14. **Promise의 기본 이해**

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Success");
//   }, 1000);
// });

// promise.then((result) => {
//   console.log(result);
// });

// - 위 Promise의 실행 흐름과 최종 출력 결과를 설명하세요.
// A : Promise가 실행되고 함수의 작업이 성공했을 때 resolve 호출, then은 작업이 성공했을 때 실행됨
// A : 출력 결과는 Success

// ### 15. **`async/await`를 이용한 비동기 함수 제어**

// async function fetchData() {
//   const data = await new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Fetched Data");
//     }, 1000);
//   });

//   console.log(data);
// }

// fetchData()

// - `async/await`를 사용한 비동기 함수의 실행 흐름과 출력 결과를 설명하세요.
// A : async/await은 프로미스를 더 간결하고 직관적으로 사용할 수 있게 해줌
//     async 함수는 Promise를 반환하며, await 키워드는 프로미스가 해결될 때까지 실행을 일시정지함.
// A : Fetched Data 출력

// ### 16. **호이스팅이 발생하는 경우**

// console.log(a);

// var a = 10;

// - 위 코드에서 `a`의 값은 무엇으로 출력되며, 그 이유는 무엇인가요?
// A : Undefined / 변수가 선언되었지만 값은 할당되지 않은 상태이기 때문이다.

// ### 17. **`let`과 `const`에서의 호이스팅 차이**

// console.log(b);

// let b = 10;

// - `let`으로 선언된 변수가 호이스팅되지 않는 것처럼 보이는 이유는 무엇인가요?
// A : TDZ 때문에 초기화되기 전에는 접근할 수 없음.

// ### 18. **생성자 함수에서 `this`의 역할**

// function Car(model) {
//   this.model = model;
// }

// const myCar = new Car("Tesla");

// console.log(myCar.model);
// 력
// - 생성자 함수에서 `this`가 가리키는 객체는 무엇이며, 출력 결과는 무엇인가요?
// A : myCar객체, Tesla 출력

// ### 19. **이벤트 루프의 동작 원리**

// console.log("Start");

// setTimeout(() => {
//   console.log("Timeout");
// }, 0);

// console.log("End");

// - 이벤트 루프가 `setTimeout`을 처리하는 방식에 대해 설명하고, 출력 순서를 예측하세요.
// A : setTimeout은 태스크 큐에 들어가고, 콜 스택이 비어있어야 실행되므로 출력순서는 Stare -> End -> Timeout

// ### 20. **프로미스 체인의 동작 이해**

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("First Promise");
//   }, 1000);
// })
//   .then((result) => {
//     console.log(result);
//     return "Second Promise";
//   })
//   .then((result) => {
//     console.log(result);
//   });

// - 프로미스 체인이 어떻게 동작하는지 설명하고, 최종 출력 결과를 예측하세요.
// A : 첫 번째 then에서 프로미스가 해결되면 'First Promise' 출력 후, return으로 'Second Promise'를 반환하고 두번째 then에서 출력됨. (순차적으로 출력)
