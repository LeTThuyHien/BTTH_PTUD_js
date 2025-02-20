import { useState } from 'react';
import './Calculate.css';
const Calculator = () => {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState(null);

    const handleCalculation = (operator) => {
        const a = parseFloat(num1);
        const b = parseFloat(num2);
        let res;

        if (isNaN(a) || isNaN(b)) {
            setResult('Vui lòng nhập số hợp lệ!');
            return;
        }

        switch (operator) {
            case '+':
                res = a + b;
                break;
            case '-':
                res = a - b;
                break;
            case '*':
                res = a * b;
                break;
            case '/':
                res = b !== 0 ? a / b : 'Lỗi: Không chia cho 0';
                break;
            default:
                res = 'Phép tính không hợp lệ';
        }
        setResult(res);
    };

    return (
        <div style={{ padding: '20px', maxWidth: '300px', margin: '0 auto' }}>
            <h2>Calculate</h2>
            <div>
                <input
                    type="number"
                    value={num1}
                    onChange={(e) => setNum1(e.target.value)}
                    placeholder="Số thứ nhất"
                    style={{ marginRight: '10px', width: '120px' }}
                />
                <input
                    type="number"
                    value={num2}
                    onChange={(e) => setNum2(e.target.value)}
                    placeholder="Số thứ hai"
                    style={{ width: '120px' }}
                />
            </div>
            <div style={{ marginTop: '10px' }}>
                <button onClick={() => handleCalculation('+')}>+</button>
                <button onClick={() => handleCalculation('-')} style={{ margin: '0 5px' }}>
                    -
                </button>
                <button onClick={() => handleCalculation('*')}>*</button>
                <button onClick={() => handleCalculation('/')} style={{ marginLeft: '5px' }}>
                    /
                </button>
            </div>
            <div style={{ marginTop: '15px' }}>
                <strong>Kết quả: </strong> {result}
            </div>
        </div>
    );
};

export default Calculator;
