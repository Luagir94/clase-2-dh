import React,{useReducer} from "react";

export const ContextoFormulario = React.createContext();

const initialStateEntrenador ={
    nombre: "",
    apellido: "",
    email: "",
    nombrePokemon: "",
}



const reducerEntrenador = (state, action) => {
  switch (action.type){
    case "AGREGAR_ENTRENADOR":
      return {
        ...state,
        ...action.payload

  }
  case "AGREGAR_POKEMON":
    return {
      ...state,
      ...action.payload
    }
  default:
    return state;
}}

const ProviderFormulario = ({ children }) => {

    const [entrenadorState, dispatchEntrenador] = useReducer(reducerEntrenador, initialStateEntrenador);

  const handleInputBlur = (valorInput) => {
    const { campo, valor } = valorInput;
    if(campo === "nombrePokemon"){
      console.log('pokemon')
      dispatchEntrenador({type : "AGREGAR_POKEMON", payload :  {nombrePokemon : valor}})
    }else{
      dispatchEntrenador({type : "AGREGAR_ENTRENADOR", payload : {[campo] : valor}})
    }
  };

  return (
    <ContextoFormulario.Provider
      value={{
        entrenadorState,
    
        handleInputBlur,
      }}
    >
      {children}
    </ContextoFormulario.Provider>
  );
};

export default ProviderFormulario;

