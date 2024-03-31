// importación
import React from "react"
import PropTypes from "prop-types"

// generación de la función del componente (función flecha o arrow function)
const Result = ({ value }) => (
        <div className="result">
            {value}
        </div>
)


Result.propTypes = {
    value: PropTypes.string.isRequired
}

Result.defaultProps = {
    value: '0'
}
// exportación
export default Result