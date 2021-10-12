import {React, useState} from "react";


export function ButtonCancel({ btnClassName, btnAction, btnText }) {
  return (
    <button
      id="btnCancel"
      className={btnClassName}
      type="button"
      onClick={btnAction}
    >
      {btnText}
    </button>
  );
}

export function ButtonConfirm({ btnClassName, btnText, btnAction }) {
  return (
    <button
      id="btnConfirm"
      className={btnClassName}
      type="button"
      onClick={btnAction}
    >
      {btnText}
    </button>
  );
}

export function ButtonBack({ btnClass, btnAction }) {
  return (
    <button id="btnBack" className={btnClass} type="button" onClick={btnAction}>
      voltar
    </button>
  );
}

export function ButtonDrop({
  btnId,
  btnClassName,
  btnType,
  btnAction,
  ClassImgBtnDrop}) {

  const [drop, setDrop] = useState(abrirSelecaoAzul);

 /* const ShowItems = () => {
   if (drop === abrirSelecaoAzul){
     setDrop(fecharSelecaoAzul);
   }
   else {
    setDrop(abrirSelecaoAzul);
    }
  };*/
  return (
    <button
      id={btnId}
      className={btnClassName}
      type={btnType}
      onClick={btnAction}
    >
      <img onClick={ShowItems} className={ClassImgBtnDrop} src={drop} alt="Botão de Exibição" />
    </button>
  );
}

export function ButtonOption({ btnId, btnClassName, option, btnAction }) {
  return (
    <button
      id={btnId}
      className={btnClassName}
      type="button"
      onClick={btnAction}
    >
      {option}
    </button>
  );
}

// export function ButtonInsideTable({ btnText, btnAction }) {
//   return (
//     <button
//       id="btnInsideTable"
//       className="btnInsideTable"
//       type="button"
//       onClick={btnAction}
//     >
//       {btnText}
//     </button>
//   );
// }