const translatePigLatin = (str) => {
  const vowels = ["a", "e", "i", "o", "u"]; // ta làm mảng nguyên âm nhé, làm mảng phụ âm rất nhiều, nguyên âm có 5 cái thôi

  if (vowels.includes(str[0])) {
    // check xem thằng đầu tiên là nguyên âm hay phụ âm
    return str + "way";
  } else {
    let consonantCluster = ""; // nếu là consonant phải lấy cả cụm, ko phải lấy 1 chữ thôi
    let i = 0;
    while (!vowels.includes(str[i]) && i < str.length) {
      // chạy đến khi nào hết đoạn consonant thì thôi
      consonantCluster += str[i];
      i++;
    }
    return str.slice(i) + consonantCluster + "ay"; // hàm slide dùng để cắt chuỗi, nếu viết slice(i) nghĩa là cắt từ vị trí y đến cuối để tạo ra chuỗi mới
  }
};

const testCase1 = translatePigLatin("california")
console.log(testCase1)

const testCase2 = translatePigLatin("paragraphs")
console.log(testCase2)

const testCase3 = translatePigLatin("algorithm")
console.log(testCase3)

const testCase4 = translatePigLatin("schwartz")
console.log(testCase4)