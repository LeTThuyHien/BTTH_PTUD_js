import { useState } from 'react';

const SumCalculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [sum, setSum] = useState(null);

  const calculateSum = () => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (isNaN(a) || isNaN(b)) {
      setSum('Vui lòng nhập số hợp lệ!');
      return;
    }

    setSum(a + b);
  };

  return (
    <div>
      <h2>Tính tổng hai số</h2>
      <div>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Nhập số thứ nhất"
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Nhập số thứ hai"
      />
      </div>
      
      <button onClick={calculateSum}>Tính tổng</button>
      <div>
        <strong>Kết quả: </strong> {sum}
      </div>
    </div>
  );
};

export default SumCalculator;
