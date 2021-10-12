import React from "react";

export function Select({dataSelect,selectOnChange, selectValue, selectClassName, selectOptions}) {
  return (
    <select
      data-item={dataSelect}
      onChange={selectOnChange}
      value={selectValue}
      className={selectClassName}
    >{selectOptions}</select>
  );
}

export function SelectOption({optionValue, option}) {
  return <option value={optionValue}>{option}</option>;
}