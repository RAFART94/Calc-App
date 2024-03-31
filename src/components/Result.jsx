// importación
import React from "react"

// generación de la función del componente (función flecha o arrow function)
const Result = ({ value }) => {
    console.log('Renderización de Result', value)
    return (
        <div className="result">
            {value}
        </div>
    )
}

// exportación
export default Result