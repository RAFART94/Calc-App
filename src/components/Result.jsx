// importación
import React from "react"

// generación de la función del componente (función flecha o arrow function)
const Result = (props) => {
    debugger
    console.log('Renderización de Result', props.value)
    return (
        <div className="result">
            {props.value}
        </div>
    )
}

// exportación
export default Result