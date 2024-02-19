import { useState } from 'react'
import './App.css'

function App() {
  
  return (
    <>
     <h1>Calculadora</h1>
    <div class="samba">
        <h3>Digite os horarios que deseja calcular!</h3>
        <input type="number" id="horaInicial" placeholder="Hora inicial"/> &nbsp; : &nbsp;
        <input type="number" id="minutoInicial" placeholder="Minuto inicial"/><br/><br/>
        <input type="number" id="horaFinal" placeholder="Hora Final"/> &nbsp; : &nbsp;
        <input type="number" id="minutoFinal" placeholder="Minuto Final"/><br/><br/>
        <button onclick="soma()">Soma</button>
        <button onclick="diferença()">Diferença</button>
        <h3 id="resultado">Resultado</h3>
    </div>
    </>
  )
}

export default App
