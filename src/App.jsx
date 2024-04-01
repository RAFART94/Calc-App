// importación
import React from "react"
import Functions from "./components/Functions"
import Numbers from "./components/Numbers"
import MathOperations from "./components/MathOperations"
import Result from "./components/Result"
import './App.css'



// generación de la función del componente (función flecha o arrow function)
//las funciones flechas si tienen un solo parametro, no hace facta parentesis, pero en caso de tener más de 1 si
const App = () => {
    // lo que ejecuta la función
    console.log('Renderización de App')//para que aparezaca en Inspeccionar>Consola
    return (
    <main className="react-calculator">
        <Result value={undefined}/>
        <Numbers onClickNumber={number => {
            console.log("Click en number", number)
        }}/>
        <Functions 
            onContentClear={() =>
                console.log('Content Clear')
            }
            onDelete={() =>
                console.log('onDelete')
            }/>
            
        <MathOperations 
            onClickOperation={operation =>
                console.log('Operation:', operation)
            }
            onClickEqual={equal =>
                console.log('Equal:', equal)
            }/>
    </main>)
}

// exportación
export default App