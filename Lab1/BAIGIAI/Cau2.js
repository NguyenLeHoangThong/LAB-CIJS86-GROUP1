// Bài này cần làm 2 việc => Biến chuỗi binary thành dạng decimal (nhị phân thành thập phân)
// Việc thứ 2 là từ các con số decimal đó, biến thành kí tự (tham khảo bảng ASCII)

// parseInt để ép kiểu 1 chuỗi thành kiểu Int (decimal), parseInt ta dùng nhận 2 tham số: 1 là chuỗi cần ép, 2 là "kiểu" của chuỗi - ví dụ chuỗi nhị phân thì sẽ là số 2
// fromCharCode biến 1 số Int thành kí tự, dựa vào bảng ASCII
// .join là kết hợp toàn bộ phần tử của 1 mảng thành 1 string lớn, ngăn cách nhau bởi tham số truyền vào join (ở đây ta không muốn các ký tự ngăn cách nhau gì nên truyền rỗng)

// bài này ta tạo 1 array từ chuỗi nhập vào, mỗi phần tử array là mỗi chuỗi con (phân chia bởi các dấu space) bằng hàm split
// sau đó ta xử lí từng chuỗi con để tạo ra chuỗi kết quả

function binaryAgent(str) {
    return str.split(" ").map((subString) => String.fromCharCode(parseInt(subString, 2))).join("")
}

const testCase = binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
console.log(testCase)