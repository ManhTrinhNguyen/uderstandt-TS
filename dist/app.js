"use strict";
// function Logger(login: string) {
//   console.log("Logger Factory");
//   return function (target: Function) {
//     console.log(login)
//     console.log(target)
//   }
// }
// function WithTemplate(template: string, hookId: string) {
//   console.log("Template Factory");
//   return function<T extends {new(...args: any[]): {name: string}}>(originalConstructor: T) {
//     return class extends originalConstructor {
//       constructor(...args: any[]) {
//         super();
//         console.log("render template")
//         const hookEl = document.getElementById(hookId)
//         const person2 = new originalConstructor()
//         if (hookEl) {
//           hookEl.innerHTML = template
//         } 
//       }
//     }
//   }
// }
// @Logger("Something")
// @WithTemplate("<h1>Levi Dep trai</h1>", "app")
// class Person {
//   name = "Levi"
//   constructor() {
//     console.log("Person object ....")
//   }
// }
// const person = new Person
// console.log(person)
// function Log(target: any, propertyName: string | Symbol) {
//   console.log("Property decorator!")
//   console.log(target, propertyName); 
// }
// function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
//   console.log("Accessor decorator!")
//   console.log(target);
//   console.log(name);
//   console.log(descriptor);
// }
// function Log3(target: any, name: string, descriptor: PropertyDescriptor) {
//   console.log("Method decorator!")
//   console.log(target);
//   console.log(name);
//   console.log(descriptor);
// }
// function Log4(target: any, name: string | symbol, position: number) {
//   console.log("Parameters decorator!")
//   console.log(target);
//   console.log(name);
//   console.log(position);
// }
// class Product {
//   @Log
//   //@Log2
//   title: string;
//   private _price: number;
//   @Log2
//   set price(val: number) {
//     if (val > 0) {
//       this._price = val
//     } else {
//       throw new Error("Invalid price - should be positive!")
//     }
//   }
//   constructor(t: string, p: number) {
//     this.title = t
//     this._price = p
//   }
//   @Log3
//   getPriceWithTax(@Log4 tax: number) {
//     return this._price * (1 + tax);
//   }
// }
// function AutoBind(target: any, methodName: string, descriptor: PropertyDescriptor) {
//   const originalMethod = descriptor.value 
//   const adjDescriptor: PropertyDescriptor = {
//     configurable: true,
//     enumerable: false,
//     get() {
//       const boundFn = originalMethod.bind(this)
//       return boundFn
//     }
//   }
//   return adjDescriptor
// }
// class Printer {
//   message = "This work!"
//   @AutoBind
//   showMessage() {
//     console.log(this.message)
//   }
// }
// const message = new Printer
// const button = document.querySelector(".btn")!
// button.addEventListener("click", message.showMessage)
function Required() {
}
function PositiveNumber() { }
function validate(obj) { }
class Course {
    constructor(t, p) {
        this.title = t;
        this.price = p;
    }
}
const form = document.querySelector("form");
form.addEventListener("submit", event => {
    event.preventDefault();
    const titleEl = document.getElementById("title");
    const priceEl = document.getElementById("price");
    const title = titleEl.value;
    const price = +priceEl.value;
    const javascriptCourse = new Course(title, price);
    console.log(javascriptCourse);
});
//# sourceMappingURL=app.js.map