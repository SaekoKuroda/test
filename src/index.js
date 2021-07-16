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
// const myProfile = ["さえこ", 46];
// const message4 = `私の名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`
// console.log(message4)

// 配列は[]で受け取る
// const [name, age] = myProfile;
// const message5 = `私の名前は${name}です！年齢は${age}歳です。`;
// console.log(message5);

// 配列は名前が決まっていなくて順番で受け取る。順番が大事
// const [youso1, youso2] = myProfile;
// const message6 = `私の名前は${youso1}です？年齢は${youso2}歳です。`;
// console.log(message6);

/**
 * デフォルト値
 */
// sayHelloは、nameという引数を渡してあげるとコンソールに挨拶を返す関数
// const sayHello = (name) => console.log(`${name}さん、こんにちは！`);
// sayHello("さえこ");

// javascriptの場合、変数に何も設定されていない状態はundefinedとなる
// sayHello();

// 引数に何も設定されずに関数が実行された場合の初期値指定ができる。
// const sayHello = (name = "デフォルト") =>
//   console.log(`${name}さん、こんにちは！`);
// sayHello();

/**
 * スプレッド構文　...
 */
// 配列の展開
// const array1 = [5, 2, 3, 4];
// 配列の中身を一度に展開
// console.log(array1);
// 配列の中身を１つ１つ順番に展開
// 配列に対して...がついていたら、順番に処理する！と覚える
// console.log(...array1);

// 配列の中身を１つ１つ順番に展開→もう少しわかりやすく、、、
// const sumFunction = (num1, num2) => console.log(`合計は${num1 + num2}です。`);
//sumFunction(array1[0], array1[1]);
// sumFunction(...array1);

// 展開の反対、要素をまとめる
// const array2 = [ 10, 15, 20, 25, 30 ]
// const [ num1 , num2, ...array3 ] = array2
// console.log(num1)
// console.log(num2)
// console.log(array3)

// 配列のコピー、結合にも使える(reactでもよく使う)
// const array4 = [10, 20];
// const array5 = [30, 40];

// 以下２つは同じ結果に見えるが、同じではない。
// array6は別参照だが、array7は参照が引き継がれているため、
// array7の中身がかわると、array5の中身もかわってしまう
// const array6 = [...array4];
// const array7 = array5;
// console.log(array6);
// console.log(array7);

// 以下は配列をさらに配列でくるんでいる
// const array8 = [array4];
// console.log(array8);

// 配列を結合する
// array10は、２つの配列を１つの配列でくるんだ形になってしまう
// const array9 = [...array4, ...array5];
// const array10 = [array4, array5];
// console.log(array9);
// console.log(array10);

// 参照が引き継がれる検証
// const array11 = array4;
// array11[0] = 100;
// console.log(array11);
// console.log(array4);

// 参照が引き継がれない検証
// １つずつ順番に処理して、元のarray4とは別の新しい配列を作っている
// const array12 = [...array4];
// array12[0] = 100;
// console.log(array12);
// console.log(array4);
