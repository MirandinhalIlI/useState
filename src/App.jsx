import {  useState } from "react"

export function App () {
  const [numero, setNumero] = useState(30)

  function handleAumentar() {
    setNumero(numero + 1)
  }
  
  return (
    <main>
      <h1>App</h1>

      <section>
        <p>O numero da variavel é: {numero}</p>

        <button onClick={handleAumentar}>Aumentar</button>
      </section>
    </main>
  )
}