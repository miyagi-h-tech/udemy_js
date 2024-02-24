// const postalCode = '123-4657';

const postal = {

  postalCode: '123-46578',

  // this.postalCode
  checkPostalCode() {
    const replaced = this.postalCode.replace('-', '');
    const length = replaced.length;

    if (length === 7) {
      return true;
    }

    return false;
  }
}

console.log(postal.checkPostalCode());