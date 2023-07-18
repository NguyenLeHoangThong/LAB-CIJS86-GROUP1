// Đề câu 1 là viết lại các method .map(), .filter(), .reduce(), .forEach()
// Câu 2 là viết call back dùng trong forEach và map

// Câu 1

// khi gọi prototype, cái this sẽ là cái array đang duyệt nhé

Array.prototype.myMap = function (callback) {
  let newArray = [];
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this)); // .map bình thường nhận 3 tham số (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
    // đọc phần parameters để biết callback nhận tham số gì
  }
  return newArray;
};

Array.prototype.myFilter = function (callback) {
  let newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      // tương tự filter
      newArray.push(this[i]);
    }
  }
  return newArray;
};

Array.prototype.myForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

Array.prototype.myReduce = function (callback, initialValue) {
  var accumulator = !!initialValue ? initialValue : this[0]; // đây là giá trị được tính qua mỗi lần loop, ban đầu nó bằng initialValue, nếu initialValue không được khởi tạo thì nó bằng giá trị đầu của mảng
  for (let i = !!initialValue ? 0 : 1; i < this.length; i++) {
    // nếu có initialValue thì chạy từ giá trị thứ 2
    accumulator = callback(accumulator, this[i], i, this); // link parameters: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
  }
  return accumulator;
};

// Câu 2: test thử các câu 1

var Pokemon = [
  "Bulbasaur",
  "Ivysaur",
  "Venusaur",
  "Charmander",
  "Charmeleon",
  "Charizard",
  "Squirtle",
  "Wartortle",
  "Blastoise",
  "Caterpie",
  "Metapod",
  "Butterfree",
  "Weedle",
  "Kakuna",
  "Beedrill",
  "Pidgey",
  "Pidgeotto",
  "Pidgeot",
  "Rattata",
];

// using forEach to log "Hello + [Pokemon_name]!"
const loggerCallback = (item) => console.log(`Hello + ${item}`);
Pokemon.myForEach((item) => loggerCallback(item));

// using map to turn array into ["01_Bulbasaur", "02_Ivysaur", ...]
const turnCallback = (item, index) => {
  if (index + 1 < 10) return `0${index + 1}_${item}`;
  return `${index + 1}_${item}`;
};
const testCase = Pokemon.myMap((item, index) => turnCallback(item, index));
console.log(testCase)