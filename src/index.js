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

// オブジェクトは{}で囲う
// constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "さえこ",
//   age: 46
// };
// console.log(val4);

// //val4.name = "かえたよさえこ";
// val4.age = 22;
// console.log(val4);

// 配列は[]で囲う
// // constで定義した配列はプロパティの変更が可能
// const val5 = ["いちご", "バナナ"];
// val5[0] = "メロン";
// val5.push("ぶどう");
// console.log(val5);

/**
 * テンプレート文字列
 */
// const name = "さえこ"
// const age = 46
// //「私の名前はさえこです。年齢は46歳です。」
// // 従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "歳です。"
// console.log(message1)
// // テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です！年齢は${age}歳です。`
// console.log(message2)

/**
 * アロー関数
 */
// 従来の関数
// function func1(str){
//   return str
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("今日はいい天気だなあ"));

// アロー関数は"function"の記述が不要、() => で関数と同じとなる
// 処理の中でこの => が出てきたら、関数を使ってるんだなと思えばよい
// 引数が１つのときは、()を省略可
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("今日はくもってるなあ"));

// 処理が１行で終わる場合は、波カッコやreturnを省略可
// const func3 = (str) => str;
// console.log(func3("今日は雨かあ"));

// const func4 = (num1, num2) => num1 + num2;
// console.log(func4(50, 40));

// 従来の関数とアロー関数でthisの扱いが違ったりするが、今は省略
// 最近のreactはthisを書かなくてもよい

/**
 * 分割代入
　 reactでも分割代入はよく使う
 */
// const myProfile = {
//   name: "さえこ",
//   age: 46
// };
// const message1 = `私の名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`
// console.log(message1)

// オブジェクトから指定のプロパティを抜き出すことが可能
// オブジェクトは{}で受け取る
// const { name, age } = myProfile
// const message2 = `私の名前は${name}です。年齢は${age}歳です。`
// console.log(message2)

// オブジェクトにないプロパティを書くと、undefinedになる
// const { name, sex } = myProfile;
// const message3 = `私の名前は${name}です。性別は${sex}です。`;
// console.log(message3);

// 配列も同様
const myProfile = ["さえこ", 46];
// const message4 = `私の名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`
// console.log(message4)

// 配列は[]で受け取る
const [name, age] = myProfile;
const message5 = `私の名前は${name}です！年齢は${age}歳です。`;
console.log(message5);

// 配列は名前が決まっていなくて順番で受け取る。順番が大事
const [youso1, youso2] = myProfile;
const message6 = `私の名前は${youso1}です？年齢は${youso2}歳です。`;
console.log(message6);
