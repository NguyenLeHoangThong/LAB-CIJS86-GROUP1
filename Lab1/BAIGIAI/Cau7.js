// Bài này đơn giản hơn, chỉ việc if else và loop bằng while, lặp bằng while để còn xét điều kiện number

function hailstone(number){
    let sequence = []

    while (number >= 1) {
        sequence.push(number);
        if (number === 1) break; // không break nó lặp đến vô tận vì số 1 là số lẻ, nên cứ tăng number

        if (number % 2 === 0) {
            number /= 2;
        }
        else {
            number = number * 3 + 1; 
        }
    }

    return sequence
}

// ➞ [7, 22, 11, 34, 17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1, 4, 2, 1]
const testCase = hailstone(7)
console.log(testCase)