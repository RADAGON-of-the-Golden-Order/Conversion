import React from 'react';
import { useState } from 'react';
const Form = () => {
    
    const [decimalNumber, setDecimalNumber] = useState('');
            const [binaireNumber, setBinaireNumber] = useState('');

            const handleChange = (event) => {
                const input = event.target.value;
                if (!isNaN(input) && input !== '') {
                    setDecimalNumber(input);
                    setBinaireNumber((parseInt(input, 10)).toString(2))
                } else {
                    setDecimalNumber('');
                    setBinaireNumber('')

                }
            };
    
    
    return (
            <div>
                <h2>covertisseur de nombre</h2>
                <label>
                    entrez un nombre :
                    <input type="text" value={decimalNumber} onChange={handleChange} />
                </label>
                {binaireNumber && (
                    <p>
                        le nombre binaire correspondant est : {binaireNumber}
                    </p>
                )}
            </div>
         
    );
};

export default Form;