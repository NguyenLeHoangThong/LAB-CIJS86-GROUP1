// Bài này khá giống bài 1, chỉ cần lặp qua toàn chuỗi rồi đếm

function countBs(input_as_string){
    return countChar(input_as_string, "B")
}
const testCase1 = countBs("aaaaaaaaBaaaaaa")
console.log(testCase1)

function countChar(input_as_string, char){
    let count = 0;
    Array.from(input_as_string).forEach((stringChar) => {
        if (stringChar === char) count++;
    })
    return count;
}
const testCase2 = countChar("aaaaaaaaaaaaaaa","a")
console.log(testCase2)