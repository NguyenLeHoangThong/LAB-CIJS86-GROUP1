// Bản chất ta có thể dùng replaceAll để thay hết 1 kí tự / 1 chuỗi con trong 1 chuỗi cho nhanh, tuy nhiên các bạn lưu ý hint
// là "iterate" hiểu đơn giản là lặp qua từng kí tự của chuỗi để tạo ra 1 chuỗi mới, nên mình sẽ làm theo hint

function removeDollarSign(text) {
    let newString = ""
    // Tại đây muốn duyệt qua toàn string ta dùng for/while cũng được, tuy nhiên mình demo thêm cho các bạn dùng forEach
    // forEach là method duyệt qua từng phần tử của mảng (array), không phải của string, nên phải biến string thành mảng

    Array.from(text).forEach((item) => {
        if (item !== "$") newString += item;
    })

    return newString
};

const testCase = removeDollarSign('$80% percent of $life is to show $up')

console.log(testCase)