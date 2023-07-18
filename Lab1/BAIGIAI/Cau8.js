// spinalCase('This Is Spinal Tap') ➞ "this-is-spinal-tap"
// spinalCase('thisIsSpinalTap') ➞ "this-is-spinal-tap"
// spinalCase('The_Andy_Griffith_Show') ➞ "the-andy-griffith-show"

// điểm chung các string trên đề là: dù các chữ cách nhau bởi các dấu space, dấu _ hoặc thậm chí còn không cách nhau, các chữ cái bắt đầu của các từ phía sau luôn được viết hoa theo camel case
// ta lợi dụng điểm chung này để tách các chữ

const spinalCase = (str) => {
  let result = str[0]?.toLowerCase() || "";
  for (let i = 1; i < str.length; i++) {
    if (/[A-Z]/.test(str[i])) { // nếu mà là chữ hoa thì thêm dấu - vào string result là xong, đoạn giữa hai dấu / / là regex (link đọc bên dưới)
      result += `-${str[i].toLowerCase()}`;
    }
    else if (/[a-z]/.test(str[i])) {
        result += str[i]
    }
  }
  return result;
};

console.log(spinalCase('This Is Spinal Tap'));
console.log(spinalCase('thisIsSpinalTap'));
console.log(spinalCase('The_Andy_Griffith_Show'));

// Bài này thật ra nếu dùng Regex nâng cao cùng replaceAll sẽ rất nhanh, các bạn tham khảo thử Regex là gì nhé: https://en.wikipedia.org/wiki/Regular_expression
// Regex cũng sẽ được dùng nhiều nếu các bạn làm web hoặc các lĩnh vực software khác sau này, nên đọc trước