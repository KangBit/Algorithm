function solution(new_id) {
    let answer = new_id
      .toLowerCase()
      .removeSpecialSymbols()
      .removeRepeatedDot()
      .removeAtBothEndsDot()
      .putAIfEmpty()
      .substringIfTooLong()
      .repeatIfTooShort()
      .toString();
    
    return answer;
}

String.prototype.removeSpecialSymbols = function () {
  let reg = /[\{\}\[\]\/?,;:|\)*~`!^\+<>@\#$%&\\\=\(\'\"]/g;
  return this.replace(reg, "");
};

String.prototype.removeRepeatedDot = function () {
  let reg = /\.+/g;
  return this.replace(reg, ".");
};

String.prototype.removeAtBothEndsDot = function () {
  let reg = /^\.+|\.+$/g;
  return this.replace(reg, "");
};

String.prototype.putAIfEmpty = function () {
  if (this.trim().length == 0) {
    return "a";
  } else {
    return this;
  }
};

String.prototype.substringIfTooLong = function () {
  if (this.length > 15) {
    return this.substring(0, 15).removeAtBothEndsDot();
  } else {
    return this;
  }
};

String.prototype.repeatIfTooShort = function () {
  if (this.length < 3) {
    return (this + this.charAt(this.length - 1)).repeatIfTooShort();
  } else {
    return this;
  }
};