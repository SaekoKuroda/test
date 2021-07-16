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

// 処理が１行で終わる場合は、波カッコ(ブラケット)やreturnを省略可
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

/**
 * mapやfilterを使った配列の処理(for文不要！)
 */
// const stationArray1 = ["矢野口", "稲城長沼", "南多摩"];
// 全駅名を表示する
// for文
// for (let i = 0; i < stationArray1.length; i++) {
//   console.log(stationArray1[i]);
// }

// mapは配列に対して使える関数、mapの中にアロー関数を書く
// アロー前の()内は配列の要素の名前、アロー後はreturnしたいものを作成する処理を書く
//
// const stationArray2 = ["稲城", "若葉台", "京王永山", "京王多摩センター"];
// 配列の各要素に対し順番に処理を行う
// stationArray2.map((name) => console.log(name));
// 配列の各要素に対し順番に処理を行った上で新たな配列を作る
// const stationArray3 = stationArray2.map((name) => name + "加工済！");
// console.log(stationArray3);
// 新たな配列を作るので、元の配列は変わっていない
// console.log(stationArray2);

// filterは条件に一致したものに対してだけ処理を行うもの(新しい配列を作る)
// アロー後のブラケット内に値を返却する条件を書く
// const numArray1 = [1, 2, 3, 4, 5];
// const numArray2 = numArray1.filter((num) => {
//   return num % 2 === 0;
// });
// console.log(numArray2);
// console.log(numArray1);

// const stationArray2 = ["稲城", "若葉台", "京王永山", "京王多摩センター"];
// 何番目、を処理の中で使いたいときは、第二引数に添字を書く
// stationArray2.map((name, i) =>
//   console.log(`${i + 1}番目の駅は${name}駅です。`)
// );

// 最寄り駅には追加で「最寄り駅です。」と表示する
// const stationArray2 = ["稲城", "若葉台", "京王永山", "京王多摩センター"];
// const stationArray3 = stationArray2.map((name) => {
//   if (name === "稲城") {
//     return `${name}駅は、最寄り駅です。`;
//   } else {
//     return `次は、${name}駅です。`;
//   }
// });
// console.log(stationArray3);

// reactはmapもよく使う！！

/**
 * 三項演算子
 * if else を１行で記載できる。reactでもよく使うが使いすぎると可読性下がる
 */
// ある条件 ? 条件がtrueの時 : 条件がfalseの時
// const val1 = 10 > 100 ? true : false;
// console.log(val1);

// const num = "1300";
// toLocaleStringは数値処理の関数で、カンマ区切りにしてくれるもの
// console.log(num.toLocaleString());
// numが数値だったらカンマ区切りにする
// javascriptには、その変数の型が何かを返してくれるtypeOfという機能がある
// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください。";
// console.log(formattedNum);

// 関数の戻り値のチェック
// const checkSum = (num1, num2) => {
//   return num1 + num2 < 20 ? true : false;
// };
// console.log(checkSum(1, 5));

/**
 * 論理演算子の本当の意味を知ろう &&(アンパサント) \\(パイプライン)
 */
// const flag1 = true;
// const flag2 = true;

// if (flag1 || flag2) {
//   console.log("flag1またはflag2がtrueです。");
// }
// if (flag1 && flag2) {
//   console.log("flag1もflag2もtrueです。");
// }

// じつは&&＝「かつ」、||＝「または」ではない
// ||は、左側がtrueなら左側を、falseなら右側を返すもの。
// javascriptは、nullはfalse判定となるため、右側の文字列が返される
// const num = null;
// const fee = num || "金額未設定です。";
// console.log(fee);

// &&は、左側がtrueなら右側を、falseなら左側を返すもの。
const num2 = 100;
const fee = num2 && "何か設定されました。";
console.log(fee);
