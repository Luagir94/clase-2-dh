import React, { useContext } from "react";
import { ContextoFormulario } from "../../context/ContextoFormulario";

const Input = ({ name, label, type = "text" }) => {
  const { entrenadorState ,handleInputBlur  } = useContext(ContextoFormulario);

  const [value, setValue] = React.useState(entrenadorState[name] || "");

  const onChange = (e) => setValue(e.target.value);

  const onBlur = (e) => {
    e.preventDefault();
console.log(e.target, e.target.value)
    handleInputBlur({
      campo: e.target.id,
      valor: e.target.value,
    });
  };

  return (
    <div className="input-contenedor">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        value={value}
        id={name}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

export default Input;
