//const fruits = new Array();
const fruits = [
  'りんご', 'バナナ'
];

console.log(fruits);

fruits.push('みかん');
console.log(fruits);

// callback 折り返し電話
fruits.forEach(function (input){
  console.log(input);
});

// 一般的な関数の作り方
// function getItem (){}

// コールバック関数 名前がない関数（無名関数・匿名関数）

// ES6 アロー関数 =>
// 関数の名前あり
// const getItem = () => {console.log('アロー')};
const getItem = () => console.log('アロー');
getItem();


// 関数の名前なし

fruits.forEach(input => console.log(input));

// Array.filter

const scores = [10,20,30,40];

// const newScores = scores.filter( (value) => {
//   return value >= 30;
// });

const newScores = scores.filter(value => value >= 30);

console.log(newScores);

// Array.find
const members = ['本田', '香川', '長友'];

const member = members.find(value => value === '長友');

console.log(member);

// Array.map 配列を元に新しい配列を作る
const userList = [10,20,30,40];
const userIdList = userList.map(value => `user_${value}`);

console.table(userIdList);