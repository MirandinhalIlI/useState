import {  useState } from "react"

export function App () {
  const [numero, setNumero] = useState(100)
  const [mostrarEsconder, setMostrarEsconder] = useState(100)
 
  function handleAumentar() {
    setNumero(numero + 100)
  }

  function handleMostrarEsconder() {
    setMostrarEsconder(!mostrarEsconder)
  }

  
  return (
    <main>
      <h1>Exercício useState</h1>

      <section>
        <h2>Número: {numero}</h2>
        <button onClick={handleAumentar}>Aumentar</button>
      </section>

      <section>
        <h2>O paragrafo que some</h2>
        {mostrarEsconder ? <p>Em breve irei sumir</p> : ""}
        <button onClick={handleMostrarEsconder}>{mostrarEsconder ? "Esconder" :  "Mostrar"}</button>
       </section>
    </main>
  )
}