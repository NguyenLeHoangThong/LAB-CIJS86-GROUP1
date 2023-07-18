function PrimeFactorization(n) {
  let copyN = n; // không đụng đến n, một lát còn in ra ở template string
  let factors = [];
  let divisor = 2;

  while (copyN >= 2) {
    // ta sẽ duyệt cho đến khi n không thể chia cho bất kì số nào nữa (chỉ chia cho 1 được thôi vì đã hết số nguyên tố, số 2 là số nguyên tố nhỏ nhất rồi)
    if (copyN % divisor === 0) {
      // nếu mà n chia hết cho 1 số nguyên tố nào đó
      factors.push(divisor); // thì thêm số đó vào mảng
      copyN = copyN / divisor; // lấy n = n/số đó, dùng n mới này lại chia tiếp cho thừa số nguyên tố
    } else {
      divisor++; // nếu ko chia được cho thừa số nguyên tố này nữa thì bỏ qua, cộng lên chia thừa số khác
    }
  }
  // ko cần check xem có phải số nguyên tố hay không trong lần lặp trên, vì nếu divisor không phải là số nguyên tốt, copyN % divisor không bao giờ bằng 0 vì đã chia cho số nguyên tố tạo ra số divisor từ trước rồi (ví dụ copyN không bao giờ chia 9 == 0 vì trước đó nó đã chia 3 dư 0 hết rồi)

  const resultString = `${n} = ${factors.join("*")}`; // ghép mảng thừa số nguyên tố bằng phép nhân tạo ra string
  return resultString;
}

const testCase = PrimeFactorization(126);
console.log(testCase);
