import { useState } from 'react'
import { Card } from './Card'
import { Form } from './Form'
import MyContext from './contexts/myContext'

function App() {
  const [numeroCartao, setNumeroCartao] = useState('')
  const [nomeTitular, setNomeTitular] = useState('')
  const [expiracao, setExpiracao] = useState('')
  const [cvv, setCvv] = useState('')

  return (
    <div className="bg-[#1d1b1b] h-[100vh]">
      <div className="flex flex-col xl:grid xl:grid-cols-2 xl:p-80 justify-items-center ">
        <MyContext.Provider
          value={{
            numeroCartao,
            setNumeroCartao,
            nomeTitular,
            setNomeTitular,
            expiracao,
            setExpiracao,
            cvv,
            setCvv
          }}
        >
          <Form />
          <Card
            numero={numeroCartao}
            cvv={cvv}
            nomeTitular={nomeTitular}
            expiracao={expiracao}
          />
        </MyContext.Provider>
      </div>
    </div>
  )
}

export default App
