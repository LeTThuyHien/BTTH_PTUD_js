import { useState } from 'react';
import './Name.css';

    function Name() {
        const [name, setName] = useState('');
        const [disabled, setDisabled] = useState('');
        const [result, setResult] = useState('');

        function handleNameChange(e) {
            setName(e.target.value);
        }

        function handleClick() {
            setDisabled(name);
            setResult(name);
        }

        function handleReset() {
            setDisabled('');
            setName('');
            setResult('');
        }

        return (
            <div className="NameComponent">
                <input
                    type="text"
                    onChange={handleNameChange}
                    value={name}
                    placeholder="Nhập tên..."
                    disabled={disabled !== ''}
                />
                <div>
                    <button className='btn_click' onClick={handleClick}>Click</button>
                    <button className='btn_reset' onClick={handleReset}>Reset</button>
                </div>
                <span>{result}</span>
            </div>
        );
    }

export default Name;
