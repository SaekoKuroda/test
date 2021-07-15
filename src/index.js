// /**
//  * const, let等の変数宣言
//  */
// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数を修正";
// console.log(val1);

// // var変数は再宣言も可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // let変数は上書き可能
// val2 = "let変数を上書き";
// console.log(val2);

// // let変数は再宣言不可能
// let val2 = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);

// // const変数は上書き不可能
// val3 = "const変数を上書き";
// console.log(val3);

// // const変数は再宣言不可能
// const val3 = "const変数を再宣言";
// console.log(val3);

// constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "さえこ",
//   age: 46
// };
// console.log(val4);

// //val4.name = "かえたよさえこ";
// val4.age = 22;
// console.log(val4);

// constで定義した配列はプロパティの変更が可能
const val5 = ["いちご", "バナナ"];
val5[0] = "メロン";
val5.push("ぶどう");
console.log(val5);

/**
 *
 */
