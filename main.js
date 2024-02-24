'use strict';
const globalVariable = 'グローバル';

function checkScope() {
  const localVariable = 'ローカル'; //constを外すとグローバル関数になる。

  //console.log(localVariable);
  console.log(globalVariable);

}

//console.log(globalVariable);

checkScope();

//console.log(localVariable);