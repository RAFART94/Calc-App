//importar React
import React from "react"
import PropTypes from "prop-types"

//componente funcional
//Cuando el cuerpo de la función solo tenemos 1 return y se encuentre al inicio de la misma. Cambiamos la llaves por parentesis y eleminiamos la palabra 'return'
const Button = ({ type, text, clickHandler }) => (
        //Cuando el cuerpo de la función solo tiene 1 línea, podemos eliminar las llaves que rodean el cuerpo de la función
        <button className={type} onClick={() => clickHandler(text)}>
            <span>{text}</span>
        </button>
)


Button.propTypes = {
    type: PropTypes.string,
    text: PropTypes.string.isRequired,
    clickHandler: PropTypes.func.isRequired
}

//exportar funcion
export default Button