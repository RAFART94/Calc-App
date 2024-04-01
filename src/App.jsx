/* eslint no-eval: 0 */
// importación
import React, { useState } from "react"
import words from 'lodash.words'
import Functions from "./components/Functions"
import Numbers from "./components/Numbers"
import MathOperations from "./components/MathOperations"
import Result from "./components/Result"
import './App.css'



// generación de la función del componente (función flecha o arrow function)
//las funciones flechas si tienen un solo parametro, no hace facta parentesis, pero en caso de tener más de 1 si
const App = () => {
    //array destructuring
    //1er posición: valor (que inicialmente es el valor por defeto)
    //2da posición: función que me va a permitir modificar el valor por defecto
    //[xxx], [setxxx]
    const [stack, setStack] = useState('')

    const items = words(stack, /[^-^+^*^/]+/g)
    
    //Es similar a un if
    //(esVerdadero) ? (resultadoPorVerdadero) : (resultadoPorFalso)
    const value = items.length > 0 ? items[items.length-1] :'0';

    console.log('Renderización de App', value)
    
    return (
    <main className="react-calculator">
        <Result value={value}/>
        <Numbers onClickNumber={number => {
            console.log("Click en number", number)
            setStack(`${stack}${number}`)
        }}/>
        <Functions 
            onContentClear={() => {
                console.log('Content Clear')
                setStack('')
            }}
            onDelete={() => {
                if (stack.length > 0) {
                    const newStack = stack.substring(0, stack.length - 1)
                    console.log('onDelete', newStack)
                    setStack(newStack)
                }
            }}/>
            
        <MathOperations 
            onClickOperation={operation => {
                console.log('Operation:', operation)
                setStack(`${stack}${operation}`)
            }}
            onClickEqual={equal => {
                console.log('Equal:', equal)
                setStack(eval(stack).toString())
            }}/>
    </main>)
}

// exportación
export default App