import React, { useState } from 'react';
import './InputDrop.modules.css'; // Importe o arquivo CSS com os estilos

const InputDrop = ({ options, children }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="containerInput">
      <label>{children}</label>
      <select value={selectedOption} onChange={handleSelectChange}>
        <option value="">Selecione uma opção</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      {selectedOption && <p>Você selecionou: {selectedOption}</p>}
    </div>
  );
};

export default InputDrop;



