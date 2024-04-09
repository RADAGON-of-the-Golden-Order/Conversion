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

            const handleBinaryChange = (event) => {
                const input = event.target.value;
                if (/^[0-1]+$/.test(input)) {
                  setBinaireNumber(input);
                  setDecimalNumber(parseInt(input, 2));
                } else {
                    setBinaireNumber('');
                  setDecimalNumber('');
                }
              };
    
    
    return (
            <div>
                <h2>covertisseur de nombre decimal</h2>
                <label>
                    entrez un nombre :
                    <input type="text" value={decimalNumber} onChange={handleChange} />
                </label>
                {binaireNumber && (
                    <p>
                        le nombre binaire correspondant est : {binaireNumber}
                    </p>
                )}

                <h2>convertisseur de nombre binaire</h2>
                <label>
                    entrez un nombre :
                    <input type="text" value={binaireNumber} onChange={handleBinaryChange} />
                </label>
                {decimalNumber && (
                    <p>
                        le nombre binaire correspondant est : {decimalNumber}
                    </p>
                )}
            </div>
            

                    
         
    );
};

export default Form;