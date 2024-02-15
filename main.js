//繰り返し
// for 繰り返しの回数の設定
// for in あまり使われていない
// for of (ES6から) 使いやすい

const scores = [10, 20, 30];

// one of them
for( score of scores) {
  console.log(score);
}

// オブジェクト {}

// for(初期値; 繰り返す条件; 増減 ++ --)

for (let i = 0; i <= 10; i++) {
  console.log(i);
}