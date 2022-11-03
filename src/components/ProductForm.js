import React from "react";

const TodoForm = ({
  inputName,
  setInputName,
  inputYear,
  setInputYear,
  setProducts,
  products,
}) => {
  const inputNameHandler = (e) => {
    setInputName(e.target.value);
  };
  const inputYearHandler = (e) => {
    setInputYear(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setProducts([
      ...products,
      {
        id: Math.floor(Math.random() * 1000),
        year: inputYear,
        name: inputName,
      },
    ]);
    setInputName("");
    setInputYear("");
  };
  const cancelHandler = (e) => {
    e.preventDefault();
    setInputName("");
    setInputYear("");
  };

  return (
    <form>
      <input
        value={inputName}
        onChange={inputNameHandler}
        type="text"
        className="name"
      />
      <input
        value={inputYear}
        onChange={inputYearHandler}
        type="date"
        className="year"
      ></input>
      <button onClick={submitHandler} className="add-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <button onClick={cancelHandler} className="cancel-button" type="submit">
        <i className="fas fa-times"></i>
      </button>
    </form>
  );
};

export default TodoForm;
