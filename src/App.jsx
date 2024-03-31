// importación
import React from "react"
import './App.css'

// generación de la función del componente (función flecha o arrow function)
const App = () => {
    // lo que ejecuta la función
    console.log('Renderización de App')//para que aparezaca en Inspeccionar>Consola
    return (
    <main className="react-calculator">
        Calc App
    </main>)
}

// exportación
export default App