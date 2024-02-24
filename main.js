const postalCode = '123-46578';

// JavaScriptはcamelCase
// HTML/CSS 大文字小文字を区別しない snake_case
// 英語 動詞+名刺
function checkPostalCode(string) {
  const replaced = string.replace('-', '');
  const length = replaced.length;

  if (length === 7) {
    return true;
  }

  return false;
}

console.log(checkPostalCode(postalCode));