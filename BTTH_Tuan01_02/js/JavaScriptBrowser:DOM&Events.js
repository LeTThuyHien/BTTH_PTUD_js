console.log("\n");
console.log("Javascript Browser: DOM & Events");
let score = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.btn_again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.content_mess').textContent = 'Số dự đoán là...';
    document.querySelector('.content_secretNumber').textContent = '?';
    document.querySelector('.content_score').textContent = `Điểm: ${score}`;
    document.querySelector('.input_number').value = '';
    document.querySelector('.input_number').style.backgroundColor = '#222';
    document.querySelector('.input_number').style.width = '15rem';

});
document.querySelector('.btn_check').addEventListener('click', function () {
    const inputNumber = Number(document.querySelector('.input_number').value);
    if (!inputNumber) {
        document.querySelector('.content_mess').textContent = ' Không có số!';

    }
    else if (inputNumber === secretNumber) {
        document.querySelector('.content_mess').textContent = 'Chính xác !';
        document.querySelector('.content_secretNumber').textContent = secretNumber;
        document.querySelector('.input_number').style.backgroundColor = '#60b347';
        document.querySelector('.input_number').style.width = '15rem';
        document.querySelector('.content_secretNumber').style.width = '15rem';
        document.querySelector('.content_score').textContent = `Điểm: ${score + 1}`;
    }
    else if (inputNumber > secretNumber) {
        document.querySelector('.content_mess').textContent = 'Quá lớn !';
        score--;
        if (score >= 1) {
            document.querySelector('.content_score').textContent = `Điểm: ${score}`;
        } else {
            document.querySelector('.content_mess').textContent = 'Bạn đã thua cuộc !';
            document.querySelector('.content_score').textContent = 'Điểm: 0';
        }
    }
    else if (inputNumber < secretNumber) {
        document.querySelector('.content_mess').textContent = 'Quá nhỏ !';
        score--;
        if (score >= 1) {
            document.querySelector('.content_score').textContent = `Điểm: ${score}`;
        } else {
            document.querySelector('.content_mess').textContent = 'Bạn đã thua cuộc !';
            document.querySelector('.content_score').textContent = 'Điểm: 0';
        }
    }
});

