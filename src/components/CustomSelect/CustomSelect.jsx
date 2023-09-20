import { useState } from 'react';
import './CustomSelect.scss';
import arrowdown from '../../assets/model/arrow-down.svg';
import arrowup from '../../assets/model/arrow-up.svg';

const CustomSelect = ({ optionsOne, defaultSelect, onChangeSelect }) => {
  const [isActive, setIsActive] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultSelect);

  const handleOptionClick = (option) => {
    setIsActive((prev) => !prev);
    setSelectedOption(option);

    if (option !== selectedOption) {
      onChangeSelect(option);
    }
  };
  return (
    <div className="custom-select">
      <div className="custom-select__btn" onClick={() => setIsActive((prev) => !prev)}>
        <span style={typeof selectedOption === 'string' ? { color: selectedOption } : {}}>
          {selectedOption}
        </span>
        <img src={isActive ? arrowup : arrowdown} alt="" />
      </div>
      {isActive && (
        <div className="custom-select__dropdown">
          {optionsOne.map((option, index) => (
            <div
              className="custom-select__dropdown-item"
              key={index}
              onClick={() => handleOptionClick(option)}>
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
