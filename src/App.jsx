// importación
import React from "react"
import Button from "./components/Button"
import MathOperations from "./components/MathOperations"
import Result from "./components/Result"
import './App.css'

// generación de la función del componente (función flecha o arrow function)
//las funciones flechas si tienen un solo parametro, no hace facta parentesis, pero en caso de tener más de 1 si
const App = () => {

    const clickHandlerFunction = text => {
        console.log('Button.clickHandler', text)
    }
    // lo que ejecuta la función
    console.log('Renderización de App')//para que aparezaca en Inspeccionar>Consola
    return (
    <main className="react-calculator">
        <Result value={undefined}/>
        <div className="numbers">
            <Button text='1' clickHandler={clickHandlerFunction}/>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>0</button>
        </div>
        <div className="functions">
            <button>
                clear
            </button>
            <button>
                r
            </button>
        </div>
        <MathOperations 
            onClickOperation={operation =>
                console.log('Operación:', operation)
            }
            onClickEqual={equal =>
                console.log('Igual:', equal)
            }/>
    </main>)
}

// exportación
export default App