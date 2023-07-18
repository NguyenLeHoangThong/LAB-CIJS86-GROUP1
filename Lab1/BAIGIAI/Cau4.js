// Bài này mình viết arrow function nhé

// Hàm này kiểm tra xem 1 số có phải là số nguyên tố (prime) không
const isPrime = (num) => {
  for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
    // duyệt đến căn bậc 2 thôi nhé vì không thể có con số A nào lớn hơn căn bậc 2 của một số B mà có thể nhân với một con số khác để tạo thành con số B được
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1; // 0, 1 không được coi là số nguyên tố, số âm mình cũng cho false
};

const semiprime = (number) => {
  // Kiểm tra xem số đó có phải là semi prime hay không bằng cách chạy từ 2 đến căn bậc 2 của nó
  // nếu có con số nào mà nó chia hết thì chia để tìm ra 2 con số nhân lại bằng number
  // ví dụ nếu chạy đến 5, number = 20, ta thấy 20 chia hết cho 5 => tìm được số 4, vậy 2 con số cần XÉT là 4 và 5
  // sau đó thì check xem 4 và 5 có phải số nguyên tố không là xong, nếu phải thì check xem 4 và 5 có bằng nhau hay không
  // để check số Squarefree Semiprime

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      let factor = number / i;
      if (isPrime(i) && isPrime(factor)) {
        if (i !== factor) {
            return "Squarefree Semiprime"
        }
        return "Semiprime";
      }
    }
  }

  return "Neither";
};

const testCase1 = semiprime(49)
console.log(testCase1)

const testCase2 = semiprime(15)
console.log(testCase2)

const testCase3 = semiprime(97)
console.log(testCase3)