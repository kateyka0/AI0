import React, { useState } from "react";
import css from './InputBar.module.css'

function InputBar({ onSendMessage }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      onSendMessage(inputValue);
      setInputValue("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e); // Отправляем сообщение при нажатии на Enter
    }
  };

return (
    <form className={css.inputBar} onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={handleKeyPress} // Добавляем обработчик нажатия клавиш
        placeholder="Напишите сообщение..."
      />
      <button type="submit">Отправить</button>
    </form>
  );
}


export default InputBar;
